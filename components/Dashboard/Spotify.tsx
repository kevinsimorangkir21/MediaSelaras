import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaTrashAlt} from "react-icons/fa"
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import { ColorRing } from  'react-loader-spinner'

export interface Spotify {
    url: string,
    image: string
}

export interface SpotiyObject {
    id : Spotify
}

export default function Instagram() {
    const [allLink, setAllLink] = useState<Object>({})
    const [image, setImage] = useState<Blob>();
    const [createObjectURL, setCreateObjectURL] = useState<string>();
    const [cookies, ,] = useCookies(['token']);
    const [isLoading, setLoading] = useState(false)

    const uploadToClient = (event : any) => {
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
            return res.data.data.data;
        })
        return response;
    };

    const handleSubmit = async (event : any) => {
        setLoading(true);
        event.preventDefault()
        let cover = await uploadToServer()
        const body = new FormData()
        body.append('url', event.target.link.value)
        body.append('imageUrl', cover)
        body.append('title', event.target.title.value)
        body.append('description', event.target.description.value)
        const data = {
            url : event.target.link.value,
            imageUrl : cover,
            title : event.target.title.value,
            description : event.target.description.value
        }
        console.log(data)
        const response = await axios.post("https://api.medselaras.com/api/spotify",
            body,
            {headers: {
                "Authorization": `Bearer ${cookies.token}`
            }}
        ).then((res) => {
                event.target.link.value = ""
                event.target.title.value = "",
                event.target.description.value = ""
                setCreateObjectURL("")
                getData()
                setLoading(false);
            })
    }

    const handleDelete = async (id : number | string) => {
        setLoading(true);
        await axios.delete("https://api.medselaras.com/api/spotify/" + id,
            {headers: {
                "Authorization": `Bearer ${cookies.token}`
            }}
        )
            .then(() => {
                getData();
                setLoading(false);
            }    
            )
    }
    
    const getData = async () => {
        axios.get("https://api.medselaras.com/api/spotify",
            {headers: {
                "Authorization": `Bearer ${cookies.token}`
            }}
        )
        .then((res)=> {
            let urls : any = {}
            Object.entries(res.data.data.data).forEach(e => {
                const [key, value] : any = e;
                let temp = {
                    [value.id] : {
                        url : value.url,
                        image: value.imageUrl,
                        title: value.title,
                        desc: value.description
                    } 
                }
                urls = { ...urls, ...temp }
            })
            setAllLink(urls)
        })
    }

    useEffect(() => {
       getData()
    }, [])

    return (
        <div className='px-10 py-14 md:px-16 lg:px-20 max-w-[1200px] mx-auto' > 
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
          <div className="self-center text-start flex flex-col ">
                <p className='text-2xl font-bold mb-4'>Spotify Media Selaras</p>
                <label htmlFor="image" className='pb-2 font-bold'>Image Spotify</label>
                <div className=' overflow-hidden pb-3 bg-white rounded-md outline-1  border border-slate-300 text-lg p-2 grow-[2]'>
                    <input type="file" id="image" className='mx-auto text-lg p-2 grow-[2]' onChange={uploadToClient} />
                    <img className='w-[200px] h-[200px] object-cover m-3 mx-auto' src={createObjectURL} />
                </div>
                <form action="" onSubmit={handleSubmit} >
                    <div className='mt-3'>
                        <label htmlFor="link" className='font-bold'>Link Spotify</label>
                        <div className='flex flex-row relative overflow-hidden pb-3 mt-2'>
                            <input required type="text" id="link" className='rounded-md outline-1 border border-slate-300 text-md p-2 grow-[2]' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="title" className='font-bold'>Title Spotify</label>
                        <div className='flex flex-row relative overflow-hidden pb-3 mt-2'>
                            <input required type="text" id="title" className='rounded-md outline-1 border border-slate-300 text-md p-2 grow-[2]' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="description" className='font-bold'>Description Spotify</label>
                        <div className='flex flex-row relative overflow-hidden pb-3 mt-2'>
                            <input required type="text" id="description" className='rounded-md outline-1 border border-slate-300 text-md p-2 grow-[2]' />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='duration-200 mx-auto w-32 my-5 text-center bg-red-400 px-5 py-1 rounded-md text-white font-semibold cursor-pointer hover:bg-white hover:text-red-400 hover:border-red-400 hover:border hover:shadow-red-100 hover:shadow-sm' type="submit">Submit</button>
                    </div>
                </form>
          </div>
          <div className="pt-4">
              <table className='table-auto w-full'>
              <thead>
                  <tr className="border bg-white">
                    <th>Spotify Post</th>
                  </tr>
              </thead>
              <div className='sm:flex sm:justify-center'>
                { Object.entries(allLink).map((data => {
                    let spotify : any = data
                        return (
                            <div key={spotify[0]} className="bg-white p-3 w-fit my-3 mx-auto sm:mx-1" >
                                <div>
                                    <a className='rounded-md' href={spotify[1].url} target="_blank" rel="noreferrer" >
                                        <div className='border border-1 rounded-md border-slate-400 w-[200px] h-[200px] relative'>
                                            <Image  className="object-cover rounded-md"  src={spotify[1].image} layout="fill" objectFit="cover"  />
                                        </div>
                                        <p className='font-bold'>{spotify[1].title}</p>
                                        <p>{spotify[1].desc}</p>
                                    </a>
                                    <FaTrashAlt className=' my-3 mx-auto hover:text-red-500 cursor-pointer' onClick={() => handleDelete(data[0])} />
                                </div>
                            </div>
                        )
                }))}
              </div>
              </table>
          </div>
        </div>
    )
}
