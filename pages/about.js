import Nav from '../components/Nav'
import Text from '../components/Text'
import Image from '../components/Image'
import Layout from '../components/Layout'

import styles from '../styles/about.module.scss'

export default function About() {
  return (
    <>
      <Layout>
        <Nav />
        <div className={styles.about}>
          <img src="images/tofukuji-1.jpg" alt="Tofukuji Temple" />
          <img src="images/tofukuji-2.jpg" alt="Tofukuji Temple" />
          <img src="images/tofukuji-3.png" alt="Tofukuji Temple" />
          <Text>I travelled from Buenos Aires, Argentina to Kyoto, Japan on August 2019.</Text>
        </div>
      </Layout>
    </>
  )
}
