import React from 'react'
import styled from 'styled-components'
import { products } from '../data/products'
import SingleProduct from './SingleProduct'

const Products = () => {
  return (
    <Container>
        {
            // popularProducts.map((product)=>{
            //     return <SingleProduct key={product.id} product={product}/>
            // })
            products.map((product)=>{
                return <SingleProduct key={product.id} product={product}/>
            })
        }
    </Container>
  )
}

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

export default Products