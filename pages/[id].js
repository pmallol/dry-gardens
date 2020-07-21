import { useState, useEffect} from 'react'
import Router from 'next/router';

import Nav from '../components/Nav'
import Text from '../components/Text'
import Layout from '../components/Layout'

export default function Garden() {
  const [garden, setGarden] = useState(null)
  // useEffect(() => {
  //   fetch(`https://dry-gardens-api.herokuapp.com/gardens/${Router.query.id}`, {mode: 'cors'})
  //   .then(res => res.json())
  //   .then(body => setGarden(body))
  // })

  if(garden === null) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return(
    <>
      <Layout>
        <Nav />
        <h1>{garden.name}</h1>
        <Text>{garden.description}</Text>
        {garden.images.map(i => {
          return <a href={i.source} target="_blank"> Source</a>
        })}
      </Layout>
    </>
  )
}
