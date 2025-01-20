import axios from "axios"
import { useEffect, useState } from "react"
import Image from 'next/image'
import Link from "next/link"
import { BsPenFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ColorRing } from  'react-loader-spinner';
import { useCookies } from "react-cookie";

export default function BlogView() {
    const [allBlog, setAllBlog] = useState([])
    const [deleteId, setDeleteId] = useState<number>(0)
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [isLoading, setLoading] = useState(false)
    const [cookies, ,] = useCookies(['token']);

    const getData = async () => {
        await axios.get("https://api.medselaras.com/api/blog",
            {headers: {
                "Authorization": `Bearer ${cookies.token}`
            }}
        )
        .then(res => {
            setAllBlog(res.data.data.data)
        })
    }
    const deleteBlog = async () => {
        setLoading(true)
        await axios.delete("https://api.medselaras.com/api/blog/" + deleteId,
            {headers: {
                "Authorization": `Bearer ${cookies.token}`
            }}
        )
        .then(res => {
            getData()
            setLoading(false)
        })
    }

    useEffect(() => {
        getData()
     }, [])

    return (
        <div className="px-12 py-4">
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
            <div className="flex justify-end mb-8">
                <Link  href="/dashboard/blog/create" >
                    <div className="px-4 py-2 rounded-lg mb-4 font-bold bg-orange-400 w-24 text-center cursor-pointer">
                        Create
                    </div>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 ">
            { allBlog.map(data => {
                let val : any = data
                return (    
                    <div className="w-fit mb-3 mx-auto" key={val.id}>
                            <div className="bg-white p-4 w-80 rounded-md" >
                                <div className="w-[200px] h-[200px] relative rounded-md mx-auto" >
                                    <Image className="object-cover rounded-md" src={val.cover} layout="fill" objectFit="cover" />
                                </div>
                                <p className="font-bold text text-xl mt-3">{val.title}</p>
                                <p className="text-slate-600">{val.description}</p>
                                <div className="mt-3 flex gap-2 justify-center">
                                    <Link href={'/dashboard/blog/'+ val.slug}>
                                        <BsPenFill className="text-blue-400 cursor-pointer hover:text-blue-600" />
                                    </Link>
                                    <FaTrash className="text-red-400 cursor-pointer hover:text-red-600" onClick={() => {setOpen(true); setDeleteId(val.id)}} />
                                </div>
                            </div>
                    </div>
                )
            })}
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
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <CgDanger className="h-6 w-6 text-red-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Delete Blog
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                    Are you sure you want to delete this blog?
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {
                                    deleteBlog();
                                    setOpen(false)
                                }}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {setOpen(false)}}
                                ref={cancelButtonRef}
                            >
                                Cancel
                            </button>
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