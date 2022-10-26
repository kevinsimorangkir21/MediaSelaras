import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Layout />
    </div>

  )
}

export default Home
