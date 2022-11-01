import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Footer from '../components/NavbarFooter/Footer'
import Navbar from '../components/NavbarFooter/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Navbar />
      <Layout />
      <Footer />
    </div>

  )
}

export default Home
