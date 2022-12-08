import React from 'react'
import {Categories, Products,Newsletter,Slider} from '../components'

const HomePage = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default HomePage