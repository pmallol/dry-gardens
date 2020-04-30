import { useState, useEffect } from 'react'
import Item from './Item'

import styles from './list.module.scss'

const List = () => {
  const [gardens, setGardens] = useState(null);

  useEffect(() => {
    fetch('https://dry-gardens-api.herokuapp.com/gardens', {mode: 'cors'})
    .then(res => res.json())
    .then(body => setGardens(body))
  }, [])

  if(gardens === null) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className={styles.list}>
      {gardens.map(garden => {
        return <Item name={garden.name} image={garden.image} key={garden.id} />
      })}
    </div>
  )
}

export default List
