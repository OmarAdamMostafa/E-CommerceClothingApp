import React from 'react'
import {Announcement,Categories, Products,Newsletter,Slider} from '../components'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home