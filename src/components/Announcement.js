import React, { useState } from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../assets/Icons'

const Announcement = () => {
  const [show, setShow] = useState(true)

  return (
    <Container>
      {
        show && (
          <Wrapper>
            <Offer>Super Deal! Free Shipping on Orders Over $50</Offer>
            <Button onClick={()=>setShow(false)}>
              <CloseIcon/>
            </Button>
          </Wrapper>
        )
      }
    </Container>
  )
}

const Container = styled.div``

const Wrapper = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Offer = styled.p`
    color: white;
    font-size: 14px;
    font-weight: 500;
`

const Button = styled.button`
    border: none;
    color: white;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    cursor: pointer;
`

export default Announcement