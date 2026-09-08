import React from 'react'
import Latestcollection from '../components/Latestcollection'
import Bestseller from '../components/Bestseller'
import Collection from './Collection'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <Bestseller/>
      <Collection/>
    </div>
  )
}

export default Home