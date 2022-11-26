import axios from 'axios';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from "react-quilljs";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { CgDanger } from 'react-icons/cg';
import { ColorRing } from  'react-loader-spinner';
import { useCookies } from "react-cookie";

export interface Blog {
  title: string,
  description: string,
  date: string,
  author: string,
  content: string,
  id: number,
  cover: string
}

export default function EditBlog({slug} : {slug : string | string[] | undefined}) { 
    const { quill, quillRef, Quill  } = useQuill({modules: {imageResize: true}});
    const [ image, setImage] = useState<Blob>();
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [ createObjectURL, setCreateObjectURL] = useState<string>();
    const [isLoading, setLoading] = useState(false);
    const [cookies, ,] = useCookies(['token']);
    const [ blog, setBlog ] = useState<Blog[]>([{
      title: "",
      description: "",
      date: "",
      author: "",
      content: "",
      id: 0,
      cover: ""
    }]);
    const [imgChange, setImgChange] = useState<boolean>(false)
    
    if(Quill && !quill){
        const ImageResize = require('quill-image-resize').default
        Quill.register('modules/imageResize', ImageResize)
    }

    const uploadToClient = (event : any) => {
      if (event.target.files && event.target.files[0]) {
        const i : Blob = event.target.files[0];
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
        setImgChange(true)
      }
    };

    const uploadToServer = async () => {
      const body = new FormData();
      if(image) body.append("image", image);
      const response = await axios({
        method: "POST",
        url: "https://api.medselaras.com/api/file/image",
        data: body,
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${cookies.token}`
        },
      }).then((res) => {
        return res;
      })
      return response;
    };

    const handleSubmit = async (event : any) => {
        setLoading(true)
        event.preventDefault()
        let res : any
        
        if(imgChange){
          res = await uploadToServer()
          if(!res.data.meta.status){
            return "error"
          }
          res = res.data.data.data
        } else {
          res = blog[0].cover
        }

        const data = {
          title: blog[0].title,
          description: blog[0].description,
          date: blog[0].date,
          cover : res,
          content : quill?.root.innerHTML,
          author: blog[0].author
        }

        const body = new FormData();
        body.append('title', data.title)
        body.append('description', data.description)
        body.append('cover', data.cover)
        body.append('date', data.date)
        if(data.content) body.append('content', data.content)
        body.append('author', data.author)
        body.append('_method', "PUT")

        const response = await axios({
          method: "POST",
          url: "https://api.medselaras.com/api/blog/"+ blog[0].id,
          data: body,
          headers: {
            "Authorization": `Bearer ${cookies.token}`
          }
        }).then((res) => {
          setLoading(false)
          setOpen(true)
          return res;
        })
        return response;
      }

      const getBlog = async () => {
        setLoading(true)
        await axios.get("https://api.medselaras.com/api/blog/" + slug,
          {headers: {
            "Authorization": `Bearer ${cookies.token}`
          }}
        )
          .then(res => {
            setLoading(false);
            let data = res.data.data.data;
            setBlog({...data});
            if(quill) quill.root.innerHTML = data[0].content;
            setCreateObjectURL(data[0].cover);
          })
      }
      
      useEffect(() => {
        if(!quill) return
        getBlog()
      }, [quill])

    return (
      <div>
        <div className='px-10 py-14 md:px-16 lg:px-20 max-w-[1200px] mx-auto'>
          {isLoading && 
                  <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center'>
                      <div className="my-auto">
                          <ColorRing
                              visible={true}
                              height="80"
                              width="80"
                              ariaLabel="blocks-loading"
                              wrapperStyle={{}}
                              wrapperClass="blocks-wrapper"
                              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                          />
                      </div>
                  </div>
          }
            <form onSubmit={handleSubmit}>
                <Link href={'/dashboard/blog'}>
                  <div className='flex items-center mb-6 cursor-pointer'>
                    <IoIosArrowBack className="text-2xl" />
                    <p className='font-bold text-2xl mb-1'>Create new blog</p>
                  </div>
                </Link>
                <p className="font-semibold" >Title</p>
                <input required className='w-full px-2 py-1 rounded-lg outline-1  border-slate-300 border shadow-sm shadow-slate-100' name="title" id="title" type="text" value={blog[0].title} onChange={event => setBlog([{...blog[0], title : event.target.value}])} />
                <p className='mt-5 font-semibold'>Author</p> 
                <input required className='w-full px-2 py-1  rounded-md outline-1  border-slate-300 border shadow-sm shadow-slate-100' name="author" id="author" type="text" value={blog[0].author} onChange={event => setBlog([{...blog[0], author : event.target.value}])} />
                <p className='mt-5 font-semibold'>Date</p> 
                <input required className='w-full px-2 py-1  rounded-md outline-1  border-slate-300 border shadow-sm shadow-slate-100' name="date" id="date" type="date" value={blog[0].date} onChange={event => setBlog([{...blog[0], date : event.target.value}])} />
                <p className='mt-5 font-semibold'>Description</p> 
                <textarea required maxLength={200} className='w-full px-2 py-1  rounded-md outline-1 border-slate-300 border shadow-sm shadow-slate-100' name="description" id="description" value={blog[0].description} onChange={event => setBlog([{...blog[0], description : event.target.value}])} />
                <p className='mt-5 font-semibold'>Cover</p> 
                <div className='bg-white rounded-md p-3 w-full outline-1  border-slate-300 border shadow-sm shadow-slate-100'>
                  <input name="cover" id="cover" type="file" onChange={uploadToClient} />
                  <img className='object-cover outline-none w-[200px] h-[200px] mx-auto mt-5' src={createObjectURL} />
                </div>
                <div className='bg-white h-auto mt-5 ' >
                    <div className='bg-white mx-auto  w-full rounded-md outline-1  border-slate-300 border shadow-sm shadow-slate-100' ref={quillRef} />
                </div>
                <button className='duration-200 mx-auto w-32 mt-5 text-center bg-red-400 px-5 py-1 rounded-md text-white font-semibold cursor-pointer hover:bg-white hover:text-red-400 hover:border-red-400 hover:border hover:shadow-red-100 hover:shadow-sm' type="submit">Submit</button>
            </form>
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                          <CgDanger className="h-6 w-6 text-green-600" aria-hidden="true" />
                          </div>
                          <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                              <p className='h-full py-auto'>
                                Success edit blog
                              </p>
                            </Dialog.Title>
                          </div>
                      </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <Link href="/dashboard/blog">
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {setOpen(false)}}
                            ref={cancelButtonRef}
                        >
                            Next
                        </button>
                      </Link>
                      </div>
                  </Dialog.Panel>
                  </Transition.Child>
              </div>
              </div>
          </Dialog>
      </Transition.Root>
      </div>
    )
}