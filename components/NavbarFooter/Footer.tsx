import Image from 'next/image';
import logo from '../../asset/logo.svg';
import {BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/Bs'
import TentangKami from './TentangKamiDropdown';
import Informasi from './InformasiDropdown';

export default function Footer() {
    return (
        <div className="w-screen bg-white relative lg:h-[230px]">
            <div className='flex justify-between items-center p-8'>
                <div className=''>
                    <Image src={logo} alt ="" />
                </div>
                <div className='flex gap-6'>
                    <BsInstagram size={24} />
                    <BsTwitter size={24} />
                    <BsLinkedin size={24} />
                </div>
            </div>
            <div className='z-20  left-0  lg:bg-transparent lg:w-200 lg:left-0 ease-out delay-150 duration-200 lg:absolute lg:top-10 lg:inset-x-0 mx-auto'>
                <div className='flex flex-col justify-start items-center '>
                    <div className='my-3 text-center pb-4 '>
                        <div className='lg:flex lg:justify-center lg:items-center'>
                            <div className='mb-2 justify-start items-center gap-4 px-5 p-2 cursor-pointer hover:text-black' >
                                <h3 className='text-base text-slate-500 hover:text-black'>Beranda</h3>
                            </div>
                            <div className='mb-2 flex justify-center items-center gap-4 px-5 p-2 cursor-pointer'  id="menu-button" aria-expanded="true" aria-haspopup="true">
                               <TentangKami />
                            </div>
                            <div className='mb-2 flex justify-center items-center gap-4 px-5 p-2 cursor-pointer group'>
                               <Informasi />
                            </div>
                            <div className='mb-2 justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                <h3 className='text-base text-slate-500 hover:text-black'>Kontak</h3>
                            </div>
                        </div>
                        <div className='mt-8 lg:flex lg:justify-center lg:items-center '>
                            <div className='mb-2 justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                <p className='text-sm text-slate-500 hover:text-black'>2022 Media Selaras. All right reserved.</p>
                            </div>
                            <div className='mb-2 justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                <p className='text-sm underline text-slate-500 hover:text-black'>Privacy Policy</p>
                            </div>
                            <div className='mb-2 justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                <p className='text-sm underline text-slate-500 hover:text-black'>Terms of Service</p>
                            </div>
                            <div className='mb-2 justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                <p className='text-sm underline text-slate-500 hover:text-black'>Cookies Settings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}