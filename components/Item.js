import Link from 'next/link'

import styles from './item.module.scss'

const Item = (props) => {
  return (
    <div className={styles.item}>
      <Link href="/[id]" as={`/${props.name}`}>
        <a>
          <img src={props.image} />
          <h1>{props.name}</h1>
        </a>
      </Link>
    </div>
  )
}

export default Item
