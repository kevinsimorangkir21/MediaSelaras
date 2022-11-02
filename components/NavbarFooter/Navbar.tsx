import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import Image from 'next/image';
import logo from '../../asset/logo.svg';
import TentangKami from './TentangKamiDropdown';
import Informasi from './InformasiDropdown';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white relative">
        
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className='absolute top-2 left-8'>
                    <Image src={logo} alt ="" />
                </div>
            <div className="relative flex h-16 items-center justify-between sm:justify-center">
                
              <div className="absolute inset-y-0 w-full left-0 p-6 flex justify-end items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:bg-gray-500 hover:bg-gray-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true"/>
                  ) : (
                    <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    <a className='text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-sm font-medium'>Beranda</a>
                    <a className='text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-sm font-medium'>Artikel</a>
                    <Informasi />
                    <TentangKami />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
                            
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 text-center">
                <a className='text-slate-600 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium'>Beranda</a>
                <a className='text-slate-600 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium'>Artikel</a>
                <div className='text-slate-600 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium'>
                    <Informasi />
                </div>
                <div className='text-slate-600 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium'>
                    <TentangKami />
                </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}