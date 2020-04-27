import Nav from '../components/Nav'
import Image from '../components/Image'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <Layout>
        <Nav />
        <h1>About</h1>
        <>
          <img src="images/tofukuji-1.jpg" alt="Tofukuji Temple" />
          <img src="images/tofukuji-2.jpg" alt="Tofukuji Temple" />
        </>
      </Layout>
    </>
  )
}
