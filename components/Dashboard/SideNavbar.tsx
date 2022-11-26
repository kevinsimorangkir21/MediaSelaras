import { Disclosure } from '@headlessui/react'
import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {RiSpotifyLine} from "react-icons/ri"
import {HiOutlineNewspaper} from "react-icons/hi"
import {FiLogOut, FiInstagram} from "react-icons/fi"
import { useCookies } from 'react-cookie'
import Link from 'next/link'    
import { useRouter } from 'next/router'
import axios from 'axios'
export default function SideNavbar() {
    const [isOpen, setOpen] = useState(false)
    const [cookies, ,removeCookie] = useCookies(['token']);
    const router = useRouter()
    async function handleLogout(event: React.MouseEvent<HTMLDivElement, MouseEvent>){
        console.log("tests");
        const res = await axios.post("https://api.medselaras.com/api/logout", {},
            {
                headers: {
                    "Authorization": `Bearer ${cookies.token}`
                }
            }
        ).then(() => {
            removeCookie('token')
            router.push('/login')
        })
    }
    return (
        <div className='relative w-1'>
            <Disclosure as="nav" >
                <Disclosure.Button className="absolute top-4 left-2 z-40 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-500">
                    <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true"/>
                </Disclosure.Button>
                <div className='p-6 h-screen w-60 bg-white z-20 relative top-0 -left-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
                    <div className='pt-10 flex flex-col justify-start'>
                        <h1 className='text-base text-center cursor-pointer font-bold text-red-400 border-b border-gray-100 pb-4 w-full'>Media Selaras</h1>
                        <div className='my-4 border-b border-gray-100 pb-4'>

                            <Link href="/dashboard">
                                <div className='flex mb-2 justify-start gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg'  >
                                    <MdOutlineSpaceDashboard className='text-2xl text-gray-600 group-hover:text-white'/>
                                    <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>Dashboard</h3>
                                </div>
                            </Link>
                            <Link href='/dashboard/spotify'>
                                <div className='flex mb-2 justify-start gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg'>
                                    <RiSpotifyLine className='text-2xl text-gray-600 group-hover:text-white'/>
                                    <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>Medcast</h3>
                                </div>
                            </Link>
                            <Link href='/dashboard/instagram'>
                                <div className='flex mb-2 justify-start gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg'>
                                    <FiInstagram className='text-2xl text-gray-600 group-hover:text-white'/>
                                    <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>Instagram</h3>
                                </div>
                            </Link>
                            <Link href='/dashboard/blog'>
                                <div className='flex mb-2 justify-start gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg'>
                                    <HiOutlineNewspaper className='text-2xl text-gray-600 group-hover:text-white'/>
                                    <h3 className='text-base text-grey-800 group-hover:text-white font-semibold' >Content Writer</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div onClick={handleLogout} className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg'>
                            <FiLogOut className='text-2xl text-gray-600 group-hover:text-white'/>
                            <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>Logout</h3>
                    </div>
                </div>
            </Disclosure>
        </div>
    )
}
