import Head from 'next/head'
import Nav from '../components/Nav'
import List from '../components/List'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Karesansui</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/dtf5pvb.css" />
      </Head>
      <Layout>
        <Nav />
        <h1>Japanese dry gardens</h1>
        <List />
      </Layout>
    </>
  ) 
}
