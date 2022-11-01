import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {BsSpotify} from 'react-icons/bs'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/NavbarFooter/Navbar'
import NextImage from '../components/NextImage'

type Inputs = {
    nama: string,
    pesan:string,
    subjek: string
}

export default function Landingpage() {
    const {register, handleSubmit, watch, formState:{errors}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <Layout>
        <main>
            <Navbar />
            <div className='w-full min-h-screen font-jakartasans '>
                <section className='Landing Page'>
                    <div className='flex m-auto max-w-8xl max-w-7xl gap-14'>
                        <div className='self-center '>
                            <h1 className='font-bold text-[54px] leading-snug'>
                                Wadah pengedukasian konten kreatif terkait isu-isu sosial
                            </h1>
                            <p className='py-4 text-2xl'>
                                Komunitas yang memberikan edukasi mengenai pendidikan, ekonomi, environment, kesehatan serta pemberdayaan masyarakat
                            </p>
                            <div className='inline-flex py-3 px-8 mt-4 rounded-2xl text-white bg-[#E77E49]'>
                            Kunjungi
                            </div>
                        </div>
                        <div className="flex  w-1/2">
                            <div className='w-[300px] self-center sm:w-[400px] md:w-[500px] lg:w-[620px]'>
                                <NextImage  src = "/img/landingpage/landingpage.png" height="100%" width ="100%" layout="responsive" alt="landingpage" objectFit='contain'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='Komunitas'>
                    <div className='py-16 flex max-w-7xl flex-col m-auto px-14'>
                        <h1 className='text-center text-3xl font-bold pb-6'>
                            Komunitas yang telah berkolaborasi dengan Media Selaras
                        </h1>
                        <div className='grid grid-cols-7 grid-rows-2 gap-6 text-center '>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas1.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas2.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas3.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas4.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas5.png" layout="responsive" alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas6.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas7.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas8.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas9.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas10.png"  alt="landingpage"/>              
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas11.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas12.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas13.png"  alt="landingpage"/>
                                <NextImage height="60%" width ="100%"  src="/img/landingpage/komunitas14.png"  alt="landingpage"/>
                        </div>
                        <h3 className='text-center text-base py-8 text-gray-400'>dan 50+ lainnya</h3>
                    </div>
                </section>
               
                <section className='Tentang Medsel'>
                    <div className='relative w-full'>
                        <div className='flex flex-row items-start m-auto max-w-7xl'>
                            <NextImage src="/img/landingpage/bg-tentangmedsel.png" height="100%" width ="100%" alt="medsel-welcome-party" layout='fill' />
                            <div className='w-1/2'>
                                <div className='w-[300px] sm:w-[400px] md:w-[500px] lg:w-[623px] px-20 m-auto'>
                                    <NextImage src="/img/landingpage/tentangmedsel.png" height="100%" width ="100%" alt="medsel-welcome-party" layout='responsive' objectFit='contain'/>
                                </div>
                            </div>
                            <div className='z-10 mr-12 self-center max-w-7xl'>
                                <div className='bg-white outline-gray-200 rounded-lg outline outline-1 p-10  '>
                                    <h1 className='font-bold text-4xl pb-4'>Tentang Medsel</h1>
                                    <p className='text-xl leading-8 font-light pb-2'>Media Selaras sebagai suatu Wadah pengedukasian konten kreatif terkait
                                        isu isu sosial (Pendidikan, Ekonomi, Environment, dan Kesehatan) serta pemberdayaan masyarakat yang
                                        lebih membutuhkan melalui
                                        penggalangan dana berupa uang
                                        dan barang.
                                    </p>
                                    <div className='bg-[#E77E49] inline-flex py-4 px-8 mt-4 rounded-3xl text-white text-sm'>Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='Medsel Podcast'>
                    <div className='w-full flex gap-14 max-w-7xl justify-center content-center mx-auto pt-14'>
                        <div className='w-2/5 m-auto py-7'>
                            <h1 className='text-4xl font-bold pb-4 leading-normal'>Media Selaras Podcast (Suara Selaras)</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laudantium deserunt unde corporis culpa voluptatum minus ex consequuntur suscipit id in nam esse libero nostrum</p>
                            <div className='mt-5 p-3 rounded-2xl bg-black inline-flex gap-2'>
                            <BsSpotify className='text-green-400  bg-white rounded-2xl self-center'/><p className='text-white'>Dengarkan Sekarang di Spotify</p>
                            </div>
                        </div>
                        <div className='w-3/5 flex gap-8'>
                            <div className="py-5 px-4 outline outline-1 outline-slate-300 rounded-md">
                                <NextImage alt="/" layout='responsive' height="25%" width ="30%" src="/img/landingpage/podcast.png"/>
                                <div className='pt-5'>
                                    <h1 className='font-bold '>Yang belum merdeka dari kita</h1>
                                    <p className='py-2 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad.</p>
                                </div>
                            </div>
                            <div className="py-5 px-4 outline outline-1 outline-slate-300 rounded-md">
                                <NextImage layout="responsive" alt="/" height="25%" width ="30%" src="/img/landingpage/podcast.png"/>
                                <div className='pt-4'>
                                    <h1 className='font-bold '>Yang belum merdeka dari kita</h1>
                                    <p className='pt-2 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='Kontak'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex w-full max-w-7xl m-auto pt-14'>
                            <div className='w-1/2 basis-1/2'>
                                <div className='mt-20'>
                                    <h1 className='text-4xl font-bold'>Kontak</h1>
                                    <h3 className='text-2xl pt-2'>ingin berkolaborasi dengan media selaras?</h3>
                                </div>
                                <div className='flex flex-col pt-6'>
                                    <label htmlFor="nama" className='text-2xl pb-2'>Nama</label>
                                    <input type="text" placeholder='Masukkan Nama' className="rounded-md p-3 outline outline-1 outline-slate-400" id="nama"/>
                                    <label htmlFor="subjek" className='pt-4 text-2xl pb-2'>Subjek</label>
                                    <input type="text" className='p-3 rounded-md outline outline-1 outline-slate-400' id="subjek" placeholder='Masukkan Subjek'/>
                                    <label htmlFor="isi-pesan" className='pt-4 text-2xl pb-2'>Isi Pesan</label>
                                    <textarea name="" id="" className='p-3 rounded-md outline outline-1 outline-slate-400' placeholder='Masukkan Pesan'  rows={8}></textarea>
                                    <div className='flex justify-end'>
                                        <button className=' bg-[#E77E49] py-3 px-9 rounded-2xl text-white mt-8'>Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 basis-1/2 self-center'>
                                <NextImage src="/img/landingpage/kontak.png" height="80%" width ="100%" alt="medsel-kontak" layout='responsive' objectFit='contain'/>
                            </div>
                            <div></div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    </Layout>
    
  )
}
