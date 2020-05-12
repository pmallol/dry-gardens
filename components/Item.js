import Link from 'next/link'

import styles from './item.module.scss'

const Item = (props) => {
  return (
    <div className={styles.item}>
      <Link href="/[id]" as={`/${props.id}`}>
        <a>
          <div style={{backgroundImage: `url(${props.image})`}}></div>
          <p>{props.name}</p>
        </a>
      </Link>
    </div>
  )
}

export default Item
