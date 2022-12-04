import React from 'react'
import {NavBar,Announcement,Categories, Products,Footer,Newsletter,Slider} from '../components'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Announcement/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home