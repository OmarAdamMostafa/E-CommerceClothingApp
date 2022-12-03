import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <Container>
        {
            categories.map((item)=>{
                return <CategoryItem key={item.id} item={item}/>
            })
        }
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

export default Categories