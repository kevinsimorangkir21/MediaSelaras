import axios from 'axios';
import React, { Fragment, useRef, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from "react-quilljs";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { CgDanger } from 'react-icons/cg';
import { ColorRing } from  'react-loader-spinner';
import { useCookies } from "react-cookie";

export default function CreateBlog() { 

    const { quill, quillRef, Quill  } = useQuill({modules: {imageResize: true}});
    const [image, setImage] = useState<Blob>();
    const [createObjectURL, setCreateObjectURL] = useState<string>();
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [isLoading, setLoading] = useState(false)
    const [cookies, ,] = useCookies(['token']);
    
    if(Quill && !quill){
        const ImageResize = require('quill-image-resize').default
        Quill.register('modules/imageResize', ImageResize)
    }

    const uploadToClient = (event : any) => {
      console.log(event)
      if (event.target.files && event.target.files[0]) {
        const i : Blob = event.target.files[0];
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
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
      setLoading(true);
        event.preventDefault()
        let res = await uploadToServer()

        if(!res.data.meta.status){
            setLoading(false)
            return "Failed upload image"
        }


        console.log(event.target)
        const data = {
          title: event.target.title.value,
          description: event.target.description.value,
          date: event.target.date.value,
          cover : res.data.data.data,
          content : quill?.root.innerHTML,
          author: event.target.author.value
        }

        const body = new FormData();
        body.append('title', data.title)
        body.append('description', data.description)
        body.append('cover', data.cover)
        body.append('date', data.date)
        if(data.content) body.append('content', data.content)
        body.append('author', data.author)

        const response = await axios({
          method: "POST",
          url: "https://api.medselaras.com/api/blog",
          data: body,
          headers: {
            "Authorization": `Bearer ${cookies.token}`
          }
        }).then((res) => {
          setLoading(false)
          setOpen(true)
          return res;
        })
        console.log(response)
        return response;
      }
    
    return (
      <div>
        <div className='px-10 py-14 md:px-16 lg:px-20 max-w-[1200px] mx-auto'>
            <form onSubmit={handleSubmit}>
                <Link href={'/dashboard/blog'}>
                  <div className='flex items-center mb-6 cursor-pointer'>
                    <IoIosArrowBack className="text-2xl" />
                    <p className='font-bold text-2xl'>Create new blog</p>
                  </div>
                </Link>
                <p className="font-semibold" >Title</p>
                <input required className='w-full px-2 py-1 max-w-4xl rounded-lg outline-1  border-slate-300 border shadow-sm shadow-slate-100' name="title" id="title" type="text" />
                <p className='mt-5 font-semibold'>Author</p> 
                <input required className='w-full px-2 py-1 max-w-4xl  rounded-md outline-1  border-slate-300 border shadow-sm shadow-slate-100' name="author" id="author" type="text" />
                <p className='mt-5 font-semibold'>Date</p> 
                <input required className='w-full px-2 py-1 max-w-4xl  rounded-md outline-1  border-slate-300 border shadow-sm shadow-slate-100' name="date" id="date" type="date" />
                <p className='mt-5 font-semibold'>Description</p> 
                <textarea maxLength={200} required className='w-full px-2 py-1 max-w-4xl  rounded-md outline-1 border-slate-300 border shadow-sm shadow-slate-100' name="description" id="description"  />
                <p className='mt-5 font-semibold'>Cover</p> 
                <div className='bg-white max-w-4xl rounded-md p-3 w-full outline-1  border-slate-300 border shadow-sm shadow-slate-100'>
                  <input required name="cover" id="cover" type="file" onChange={uploadToClient} />
                  <img className='object-cover outline-none w-[200px] h-[200px] mx-auto mt-5' src={createObjectURL} />
                </div>
                <div className='bg-white h-auto mt-5 max-w-4xl ' >
                    <div className='bg-white mx-auto max-w-4xl  w-full rounded-md outline-1  border-slate-300 border shadow-sm shadow-slate-100' ref={quillRef} />
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
                                Success create blog
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