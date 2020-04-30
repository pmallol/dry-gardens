import Head from 'next/head'
import Nav from '../components/Nav'
import Text from '../components/Text'
import List from '../components/List'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kare sansui</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/dtf5pvb.css" />
      </Head>
      <Layout>
        <Nav />
        <Text>
          Kare sansui: “Dry mountains and water”; dry landscape gardens constructed of stone, sand, and moss, which represent a traditional form of Japanese art closely associated with Zen Buddhism. In most cases, raked sand or pebbles are used to represent flowing water, larger stones represent islands and mountains, and moss suggests forests. Dry landscape gardens are a common feature in Japanese Zen monasteries. The most famous examples include the gardens at Ryôan-ji, Daisen- in, and Saihô-ji, all in Kyoto.
        </Text>
        <List />
      </Layout>
    </>
  ) 
}
