import React, {useRef} from 'react'
import {BsSpotify} from 'react-icons/bs'
import Layout from '../components/Layout/Layout'
import Footer from '../components/NavbarFooter/Footer'
import Navbar from '../components/NavbarFooter/Navbar'
import NextImage from '../components/NextImage'
import Carousel from './sandbox/carousel'
import emailjs from '@emailjs/browser';

type Inputs = {
    nama: string,
    pesan:string,
    subjek: string
}

export default function Landingpage() {
    const form = useRef<HTMLFormElement>(null)

    const sendEmail = async (e : any) => {
        e.preventDefault();
        
        await emailjs.sendForm(
            'service_5iub6rc', 
            'template_2dqzoqu', 
            form.current!, 
            'fpF5hHCDqHjA2ReK4')
          .then((result) => {
              console.log(result.text);
              console.log("Message sent")
          }, (error) => {
              console.log(error.text);
          });
      };
      
    return (
        <Layout>
            <main>
                <Navbar />
                <div className='w-full min-h-screen bg-white overflow-hidden'>
                    <section className='Landing Page'>
                        <div className='flex sm:flex-row flex-col m-auto  lg:max-w-7xl lg:gap-14 p-7 lg:p-7'>
                            <div className='self-center '>
                                <h1 className='font-bold lg:text-5xl text-3xl lg:leading-snug'>
                                    Wadah pengedukasian konten kreatif terkait isu-isu sosial
                                </h1>
                                <p className='py-4 lg:text-2xl  text-base'>
                                    Komunitas yang memberikan edukasi mengenai pendidikan, ekonomi, environment, kesehatan serta pemberdayaan masyarakat
                                </p>
                                <div className='inline-flex py-3 px-8 text-sm md:text-base mt-4 rounded-2xl text-white bg-[#E77E49]'>
                                Kunjungi
                                </div>
                            </div>
                            <div className="flex lg:w-1/2 w-full mx-auto justify-center">
                                <div className='w-[400px] self-center  sm:w-[300px] md:w-[400px] lg:w-[620px]'>
                                    <NextImage  src = "/img/landingpage/landingpage.png" height="100%" width ="100%" layout="responsive" alt="landingpage" objectFit='contain'/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='Komunitas'>
                        <div className='lg:py-16 flex max-w-7xl flex-col m-auto lg:px-14 p-7'>
                            <h1 className='sm:text-center md:text-3xl text-xl w-3/4 sm:w-full pb-10 font-bold lg:pb-6'>
                                Komunitas yang telah berkolaborasi dengan Media Selaras
                            </h1>
                            <div className='grid sm:grid-cols-7   grid-cols-2 gap-6 text-center '>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas1.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas2.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas3.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas4.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas5.png" layout="responsive" alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas6.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas7.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas8.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas9.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas10.png"  alt="landingpage"/>              
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas11.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas12.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas13.png"  alt="landingpage"/>
                                    <NextImage height="50%" width ="100%"  src="/img/landingpage/komunitas14.png"  alt="landingpage"/>
                            </div>
                            <h3 className='text-center sm:text-base text-lg py-8 text-gray-400'>dan 50+ lainnya</h3>
                        </div>
                    </section>
                    <section className='Tentang Medsel'>
                        <div className='relative w-full'>
                            <div className='flex flex-row items-start m-auto max-w-7xl'>
                                <NextImage src="/img/landingpage/bg-tentangmedsel.png" height="80%" width ="100%" alt="medsel-welcome-party" layout='fill' objectFit='fill'/>
                                <div className='lg:w-1/2 lg:flex hidden'>
                                    <div className='w-[300px] sm:w-[400px] md:w-[500px] lg:w-[623px] px-20 m-auto'>
                                        <NextImage src="/img/landingpage/tentangmedsel.png" height="100%" width ="100%" alt="medsel-welcome-party" layout='responsive' objectFit='contain'/>
                                    </div>
                                </div>
                                <div className='z-10 lg:mr-12 p-7 lg:p-0 self-center max-w-7xl'>
                                    <div className='bg-white outline-slate-600 xl:outline-gray-200 rounded-3xl lg:rounded-lg outline outline-1 p-10'>
                                        <h1 className='font-bold lg:text-4xl text-xl pb-4'>Tentang Medsel</h1>
                                        <p className='lg:text-xl text-base leading-8 font-light pb-2'>Media Selaras sebagai suatu Wadah pengedukasian konten kreatif terkait
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
                    <section className='Arsip Instagram'>
                        <div className='max-w-7xl m-auto p-7 relative'>
                            <div className='mb-4'>
                                <h1 className='font-bold lg:text-4xl text-xl'>Arsip Terakhir<br/> Instagram</h1>
                            </div>
                            <Carousel num={10}/>
                        </div>
                    </section>
                    <section className="Arsip Artikel">
                        <div className='max-w-7xl m-auto p-7 pt-10 sm:pt-16 relative'>
                            <div className='mb-4 flex justify-between'>
                                <h1 className='font-bold lg:text-4xl text-xl'>Arsip Terakhir<br/> Artikel</h1>
                                <div className='self-center text-base inline-flex px-4  py-3 font-bold rounded-2xl text-[#E77E49] bg-[#FAE5DB]'>
                                    Lihat Semua
                                </div>
                            </div>
                            <Carousel num={10}/>
                        </div>
                    </section>
                    <section className='Medsel Podcast'>
                        <div className='w-full flex gap-14  lg:max-w-7xl m-auto justify-center pt-14 p-7 '>
                            <div className='md:w-2/5 w-full m-auto lg:py-7 p-7 '>
                                <h1 className='lg:text-4xl text-xl font-bold pb-4 leading-normal'>Media Selaras Podcast (Suara Selaras)</h1>
                                <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laudantium deserunt unde corporis culpa voluptatum minus ex consequuntur suscipit id in nam esse libero nostrum</p>
                                <div className='mt-5 p-3 rounded-2xl justify-center bg-black flex flex-row lg:inline-flex gap-2'>
                                <BsSpotify className='text-green-400  bg-white rounded-2xl self-center'/><p className='text-white font-bold text-base'>Dengarkan Sekarang di Spotify</p>
                                </div>
                            </div>
                            <div className='sm:w-3/5 md:flex gap-8 hidden'>
                                <div className="py-5 px-4 outline outline-1 outline-slate-300 rounded-md ">
                                    <NextImage alt="/" layout='responsive' height="25%" width ="30%" src="/img/landingpage/podcast.png"/>
                                    <div className='pt-5'>
                                        <h1 className='font-bold text-sm lg:text-base'>Yang belum merdeka dari kita</h1>
                                        <p className='py-2 font-thin text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad.</p>
                                    </div>
                                </div>
                                <div className="pt-5 px-4 outline outline-1 outline-slate-300 rounded-md">
                                    <NextImage layout="responsive" alt="/" height="25%" width ="30%" src="/img/landingpage/podcast.png"/>
                                    <div className='pt-4'>
                                        <h1 className='font-bold text-sm lg:text-base '>Yang belum merdeka dari kita</h1>
                                        <p className='pt-2 font-thin text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='Kontak'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex w-full max-w-7xl m-auto lg:pt-14 p-7'>
                                <div className='lg:w-1/2 lg:basis-1/2 w-full'>
                                    <div className='lg:mt-20 mt-10'>
                                        <h1 className='lg:text-4xl text-xl font-bold'>Kontak</h1>
                                        <h3 className='lg:text-2xl text-base pt-2'>ingin berkolaborasi dengan media selaras?</h3>
                                    </div>
                                    <div className='flex flex-col pt-6'>
                                        <label htmlFor="nama" className='lg:text-2xl text-base pb-2'>Nama</label>
                                        <input type="text" name="user_name"  placeholder='Masukkan Nama' className="rounded-md p-3 outline outline-1 outline-slate-400" id="nama"/>
                                        <label htmlFor="nama" className='pt-4 lg:text-2xl text-base pb-2'>Email</label>
                                        <input type="text" name="user_email" placeholder='Masukkan Email' className="rounded-md p-3 outline outline-1 outline-slate-400" id="email"/>
                                        <label htmlFor="subjek" className='pt-4 lg:text-2xl text-base pb-2'>Subjek</label>
                                        <input type="text" className='p-3 rounded-md outline outline-1 outline-slate-400' id="subjek" placeholder='Masukkan Subjek' name="user_subjek"/>
                                        <label htmlFor="isi-pesan" className='pt-4 lg:text-2xl text-base pb-2'>Isi Pesan</label>
                                        <textarea name="message" id="isi-pesan" className='p-3 rounded-md outline outline-1 outline-slate-400' placeholder='Masukkan Pesan'  rows={8}></textarea>
                                        <div className='flex justify-end'>
                                            <button type="submit" value="Send" className=' bg-[#E77E49] py-3 px-9 rounded-2xl text-white mt-8'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-1/2 lg:block hidden basis-1/2 self-center'>
                                    <NextImage src="/img/landingpage/kontak.png" height="80%" width ="100%" alt="medsel-kontak" layout='responsive' objectFit='contain'/>
                                </div>
                                <div></div>
                            </div>
                        </form>
                        {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form> */}
                        <Footer/>
                    </section>
                </div>
            </main>
        </Layout>
    
  )
}
