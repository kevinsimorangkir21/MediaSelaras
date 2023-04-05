import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '@/components/Dashboard/Dashboard'
import Layout from '@/components/Dashboard/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Layout>
        <Dashboard />
      </Layout>
    </div>

  )
}

export default Home
