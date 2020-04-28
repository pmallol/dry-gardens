import Item from './Item'

import styles from './list.module.scss'

const gardens = [{
  id: 1,
  name: 'Daitokuji',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Daitokuji_Kyoto06n3200.jpg/1280px-Daitokuji_Kyoto06n3200.jpg'
}, {
  id: 2,
  name: 'Daisen-in',
  image:'https://upload.wikimedia.org/wikipedia/commons/3/3f/Daisen-in1.jpg'
}, {
  id: 3,
  name: 'Jishoji',
  image:'https://upload.wikimedia.org/wikipedia/commons/0/06/Ginkakuji_Kyoto03-r.jpg'
}, {
  id: 4,
  name: 'Jisso-in',
  image:'https://upload.wikimedia.org/wikipedia/commons/f/f8/Jissoin-Temple-Stone-Garden.JPG'
}, {
  id: 5,
  name: 'Myoshinji',
  image:'https://upload.wikimedia.org/wikipedia/commons/7/7e/Myoshinji-M9707.jpg'
}, {
  id: 6,
  name: 'Rozanji',
  image:'http://www.taleofgenji.org/images/rozanji_lanterns.jpg'
}, {
  id: 7,
  name: 'Ryoanji',
  image:'https://upload.wikimedia.org/wikipedia/commons/8/80/Ryoanji_Temple_EntranceKyoto.jpg'
}, {
  id: 8,
  name: 'Tofukuji',
  image:'https://upload.wikimedia.org/wikipedia/commons/7/76/TofukujiHondo.jpg'
}]

const List = () => {
  return (
    <div className={styles.list}>
      {gardens.map(garden => {
        return <Item name={garden.name} image={garden.image} />
      })}
    </div>
  )
}

export default List
