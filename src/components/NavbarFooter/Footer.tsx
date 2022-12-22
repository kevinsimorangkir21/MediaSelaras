import Image from 'next/image';
import logo from '~/logo.svg';
import {BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs'
import TentangKami from './TentangKamiDropdown';
import Informasi from './InformasiDropdown';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="w-full bg-white relative lg:h-[350px] px-14 py-8">
            <div className='z-20  left-0  lg:bg-transparent lg:w-200 lg:left-0 ease-out delay-150 duration-200 lg:absolute lg:top-10 lg:inset-x-0 mx-auto'>
                <div className='flex flex-col justify-start items-center '>
                    <div className='py-3 text-center pb-4 w-full'>
                        <div className='flex justify-between w-full lg:hidden'>
                            <div className=''>
                                <Image src={logo} alt ="" />
                            </div>
                            <div className='flex gap-6 items-center'>
                                <BsInstagram size={24} />
                                <BsTwitter size={24} />
                                <BsLinkedin size={24} />
                            </div>
                        </div>
                        <div className='lg:flex lg:justify-between lg:items-center'>
                        <div className='lg:hidden'>
                                <div className=' justify-start items-center gap-4 px-5 p-2 cursor-pointer hover:text-black' >
                                    <Link href="/">
                                        <h3 className='text-base text-slate-500 hover:text-black'>Beranda</h3>
                                    </Link>
                                </div>
                                <div className='mb-2 flex justify-center items-center gap-4 px-5 p-2 cursor-pointer group'>
                                    <Informasi />
                                </div>
                                <div className='mb-2 flex justify-center items-center gap-4 px-5 p-2 cursor-pointer'  id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <TentangKami />
                                </div>
                                <div className='mb-2 justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                    <h3 className='text-base text-slate-500 hover:text-black'>Kontak</h3>
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex lg:justify-between lg:items-center hidden'>
                            <div className='hidden lg:block w-48'>
                                <Image src={logo} alt ="" />
                            </div>
                            <div className='flex'>
                                <div className='justify-start gap-4 px-5 p-2'>
                                    <Link href="/">
                                        <h3 className='text-base text-black font-semibold cursor-pointer hover:underline'>Beranda</h3>
                                    </Link>
                                </div>
                                <div className='justify-start gap-4 px-5 p-2'>
                                    <h3 className='text-base text-black font-semibold '>Informasi</h3>
                                    <h3 className='text-base pt-2 text-slate-500 hover:text-black cursor-pointer'>Medcast</h3>
                                    <h3 className='text-base pt-2 text-slate-500 hover:text-black cursor-pointer'>Koperasi Selaras</h3>
                                    <h3 className='text-base pt-2 text-slate-500 hover:text-black cursor-pointer'>Info magang</h3>
                                    <h3 className='text-base pt-2 text-slate-500 hover:text-black cursor-pointer'>Info Beasiswa</h3>
                                </div>
                                <div className='justify-start gap-4 px-5 p-2'>
                                    <h3 className='text-base text-black font-semibold '>Tentang Kami</h3>
                                    <Link href="/tentang-medsel">
                                        <h3 className='text-base pt-2 text-slate-500 hover:text-black cursor-pointer'>Tentang Medsel</h3>
                                    </Link>
                                    <h3 className='text-base pt-2 text-slate-500 hover:text-black cursor-pointer'>Struktur Komunitas</h3>
                                </div>
                                <div className='justify-start gap-4 px-5 p-2 cursor-pointer hover:underline'>
                                    <h3 className='text-base text-black font-semibold '>Kontak</h3>
                                </div>
                            </div>
                            <div className=' gap-6 hidden lg:flex lg:pr-14'>
                                <BsInstagram size={24} />
                                <BsTwitter size={24} />
                                <BsLinkedin size={24} />
                            </div>
                        </div>
                    </div>
                    <div className='py-8 bg-white lg:flex lg:justify-between lg:items-center w-full px-10'>
                        <div className='justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                            <p className='text-sm text-slate-500 hover:text-black text-center'>2022 Media Selaras. All right reserved.</p>
                        </div>
                        <div className='text-center lg:flex'>
                            <div className='justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                <p className='text-sm underline text-slate-500 hover:text-black'>Privacy Policy</p>
                            </div>
                            <div className='justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                <p className='text-sm underline text-slate-500 hover:text-black'>Terms of Service</p>
                            </div>
                            <div className='justify-start items-center gap-4 px-5 p-2 cursor-pointer'>
                                <p className='text-sm underline text-slate-500 hover:text-black'>Cookies Settings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}