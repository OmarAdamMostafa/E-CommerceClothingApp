import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home