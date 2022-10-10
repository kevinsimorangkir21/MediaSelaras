import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import medsel from '../public/img/Logo.svg'
const Home: NextPage = () => {
  return (
    <div className='w-full relative min-h-screen overflow-hidden'>
      
      {/* <Image src={medselGif} layout="fill" /> */}
      <div className='w-full min-h-screen flex'>
        <Image src={medsel} id="bg-gradient" className="flex m-auto w-[30%] sm:w-[25%] md:w-[25%]" alt="" />
      </div>
      
      <div id="bg-gradient"className='absolute w-[275px] h-[275px] right-[-100px] top-[-25px] md:right-[-400px] md:top-[-400px] lg:right-[-400px] lg:top-[-400px] rounded-full sm:w-[600px] md:w-[750px] md:h-[750px] lg:w-[900px] lg:h-[900px] sm:w-[550px] sm:h-[550px] sm:right-[-200px] sm:top-[-200px] sm:blur-[200px] blur-[100px] bg-[#F5A671] transition-all'></div>
      <div id="bg-gradient" className='absolute w-[275px] h-[275px] left-[-100px] top-[-100px] md:left-[-400px] md:top-[-400px] lg:left-[-400px] sm:left-[-200px] sm:top-[-200px] lg:top-[-400px] rounded-full sm:w-[550px] sm:h-[550px] md:w-[750px] md:h-[750px] lg:w-[900px] lg:h-[900px] sm:blur-[200px] blur-[100px] bg-[#F5A671] transition-all'></div>
      <div id="bg-gradient" className='absolute  h-[400px] bottom-[-250px] lg:bottom-[-100px] md:bottom-[-150px]  md:h-[350px]  sm:h-[300px] sm:bottom-[-100px] mx-auto  rounded-full w-full lg:h-[350px] sm:blur-[200px] blur-[100px] self-center bg-[#F5A671] transition-all'></div>
      <div className='marquee w-[200%] absolute top-0 bg-white'>
        <ul className='marquee-content lg:py-2  py-1 bg-white sm:text-base text-xs md:text-lg lg:text-xl font-[700] text-white flex'>
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
        <ul className='marquee-content lg:py-2 py-1 bg-white lg:text-xl sm:text-base text-xs md:text-lg  font-[700] text-white flex'>
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
    

  )
}

export default Home
