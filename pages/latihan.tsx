import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import medsel from '../public/img/Logo.svg'
const Home: NextPage = () => {
  return (
    <div className='w-full relative min-h-screen overflow-hidden'>
      
      {/* <Image src={medselGif} layout="fill" /> */}
        <div className='container'>
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
            <div className="item">Item 4</div>
            <div className="item">Item 5</div>
            <div className="item">Item 6</div>
            <div className="item">Item 7</div>
            <div className="item">Item 8</div>
            <div className="item">Item 9</div>
            <div className="item">Item 10</div>
        </div>
      
    </div>
    

  )
}

export default Home
