import { Disclosure } from '@headlessui/react'
import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {SiGooglepodcasts} from "react-icons/si"
import  {IoIosPaper} from "react-icons/io"
import {FiLogOut} from "react-icons/fi"
export default function SideNavbar({setDisplayPage} : any) {
    const [sidebarOpen, setSideBarOpen] = useState(false);
  return (
    <div>
        <Disclosure as="nav" >
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-500">
                <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true"/>
            </Disclosure.Button>
            <div className='p-6 h-screen bg-white z-20 relative top-0 -left-[100%] lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
                <div className='flex flex-col justify-start items-center'>
                    <h1 className='text-base text-center cursor-pointer font-bold text-red-400 border-b border-gray-100 pb-4 w-full'>Media Selaras</h1>
                    <div className='my-4 border-b border-gray-100 pb-4'>
                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg' onClick={()=>{setDisplayPage(0)}} >
                            <MdOutlineSpaceDashboard className='text-2xl text-gray-600 group-hover:text-white'/>
                            <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>Dashboard</h3>
                        </div>
                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg' onClick={()=>{setDisplayPage(1)}}>
                            <SiGooglepodcasts className='text-2xl text-gray-600 group-hover:text-white'/>
                            <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>Medcast</h3>
                        </div>
                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg'>
                            <IoIosPaper className='text-2xl text-gray-600 group-hover:text-white'/>
                            <h3 className='text-base text-grey-800 group-hover:text-white font-semibold' onClick={()=>{setDisplayPage(2)}}>Content Writer</h3>
                        </div>
                    </div>
                    <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg'>
                            <FiLogOut className='text-2xl text-gray-600 group-hover:text-white'/>
                            <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>Logout</h3>
                    </div>
                </div>
            </div>
        </Disclosure>
    </div>
  )
}
