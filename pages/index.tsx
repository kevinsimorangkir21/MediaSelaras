import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import medsel from '../public/img/Logo.svg'
const Home: NextPage = () => {
  return (
    <div className='w-full h-screen'>
    <div className='w-full relative h-screen overflow-hidden'>
      <Head>
        <meta name="description" content="Media Selaras sebagai suatu Wadah
            pengedukasian konten kreatif terkait
            isu isu sosial (Pendidikan, Ekonomi,
            Environment, dan Kesehatan) serta
            pemberdayaan masyarakat yang
            lebih membutuhkan melalui
            penggalangan dana berupa uang
            dan barang."
          />
        <meta name="keywords" content="Medsel, Media Selaras, MedSelaras"/>
        <title>Media Selaras</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="ico/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="ico/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="ico/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="ico/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="ico/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="ico/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="ico/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="ico/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="ico/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="ico/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="ico/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="ico/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="ico/favicon-128.png" sizes="128x128" />
        <meta name="application-name" content="&nbsp;"/>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="ico/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="ico/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="ico/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="ico/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="ico/mstile-310x310.png" />
      </Head>
      {/* <Image src={medselGif} layout="fill" /> */}
      <div className='w-full h-screen flex overflow-hidden'>
        <Image src={medsel} id="bg-gradient" className="flex m-auto w-[30%] lg:w-[15%] sm:w-[25%] md:w-[20%]" alt="media selaras logo" />
      </div>
      <div id="bg-gradient"className='absolute w-[275px] h-[275px] right-[-100px] top-[-25px] md:right-[-400px] md:top-[-400px] lg:right-[-400px] lg:top-[-400px] rounded-full sm:w-[600px] md:w-[750px] md:h-[750px] lg:w-[900px] lg:h-[900px] sm:w-[550px] sm:h-[550px] sm:right-[-200px] sm:top-[-200px] sm:blur-[200px] blur-[100px] bg-[#F5A671] transition-all'></div>
      <div id="bg-gradient" className='absolute w-[275px] h-[275px] left-[-100px] top-[-100px] md:left-[-400px] md:top-[-400px] lg:left-[-400px] sm:left-[-200px] sm:top-[-200px] lg:top-[-400px] rounded-full sm:w-[550px] sm:h-[550px] md:w-[750px] md:h-[750px] lg:w-[900px] lg:h-[900px] sm:blur-[200px] blur-[100px] bg-[#F5A671] transition-all'></div>
      <div id="bg-gradient" className='absolute  h-[400px] bottom-[-250px] lg:bottom-[-100px] md:bottom-[-150px]  md:h-[350px]  sm:h-[300px] sm:bottom-[-100px] mx-auto  rounded-full w-full lg:h-[350px] sm:blur-[200px] blur-[100px] self-center bg-[#F5A671] transition-all'></div>
      <div className='marquee w-[200%] absolute  top-0 bg-white'>
        <ul className='marquee-content lg:py-2 font-inter py-1 bg-white sm:text-base text-xs md:text-lg lg:text-xl font-[700] text-white flex'>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]   text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>  
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>  
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#F4B388] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#D98B85] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#D98B85] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#F4B388] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#D98B85] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#F4B388]  flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#D98B85] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#F4B388]  flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
        </ul>
      </div>
     
      <div className='marquee w-[200%] absolute bottom-0 bg-white'>
        <ul className='marquee-content lg:py-2 py-1 font-inter bg-white lg:text-xl sm:text-base text-xs md:text-lg  font-[700] text-white flex'>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%]  text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>  
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>  
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#F4B388] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#D98B85] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#D98B85] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#F4B388] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#D98B85] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#F4B388]  flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#D98B85] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#F4B388]  flex content-center items-center whitespace-nowrap ">COMING SOON</li>
          <li className="sm:p-2 p-1 shrink-0 lg:w-[8%] md:w-[10%] sm:w-[12%] w-[15%] text-[#AFAF08] flex content-center items-center whitespace-nowrap ">COMING SOON</li>
        </ul>
     
      </div>
      
      </div>
    
    </div>
  )
}

export default Home
