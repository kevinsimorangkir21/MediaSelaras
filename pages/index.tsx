import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import medsel from '../public/img/Logo.svg'
const Home: NextPage = () => {
  return (
    <div className='w-full relative min-h-screen overflow-hidden'>
      
      {/* <Image src={medselGif} layout="fill" /> */}
      <div className='w-full min-h-screen flex'>
        <Image src={medsel} id="bg-gradient" className="flex m-auto w-[30%] sm:w-[25%] md:w-[16%]" alt="" />
      </div>
      
      <div id="bg-gradient"className='absolute w-[700px] h-[650px] right-[-600px] top-[-300px] md:right-[-450px] md:top-[-450px] lg:right-[-400px] lg:top-[-400px] rounded-full sm:w-[700px] md:w-[750px] md:h-[700px] lg:w-[900px] lg:h-[823px] sm:w-[650px] sm:h-[600px] sm:right-[-375px] sm:top-[-300px] blur-[200px] bg-[#F5A671] transition-all'></div>
      <div id="bg-gradient" className='absolute w-[700px] h-[650px] left-[-600px] top-[-300px] md:left-[-450px] md:top-[-450px] lg:left-[-400px] sm:left-[-400px] sm:top-[-300px] lg:top-[-400px] rounded-full sm:w-[650px] sm:h-[600px] md:w-[750px] md:h-[700px] lg:w-[900px] lg:h-[823px] blur-[200px] bg-[#F5A671] transition-all'></div>
      <div id="bg-gradient" className='absolute w-[800px] h-[400px] bottom-[-300px] lg:bottom-[-900px] md:bottom-[-800px] md:w-[1800px] md:h-[850px] sm:w-[1600px] sm:h-[700px] sm:bottom-[-600px] mx-auto left-0 right-0 rounded-full lg:w-[1900px] lg:h-[900px] blur-[200px] bg-[#F5A671] transition-all'></div>

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
