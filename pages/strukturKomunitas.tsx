import React from 'react'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/NavbarFooter/Navbar'
import NextImage from '../components/NextImage'
function strukturKomunitas() {
  return (
    <Layout>
        <main>
            <Navbar/>
            <section>
                <div className='min-h-screen flex justify-center'>
                    <div className='text-center self-center'>
                        <h1>Struktur Komunitas Batch 3</h1>
                        <p>Media Selaras 2022</p>
                    </div>
                    <NextImage src="/img" width="100%" height="100%" layout="responsive" objectFit='cover' alt=''/>
                </div>
            </section>
        </main>
        
    </Layout>
  )
}

export default strukturKomunitas