import Link from 'next/link'

import styles from './nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Karesansui</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Nav
