import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Container>
        <Wrapper>
            <Code>404</Code>
            <Description>Sorry, the page does not exist!</Description>
            <Button to='/'>
                BACK HOME
            </Button>
        </Wrapper>
    </Container>
  )
  
  
  
//   <Wrapper className='page-100'>
//     <section>
//       <h1>404</h1>
//       <h3>Sorry, the page does not exist!</h3>
//       <Link to='/' className='btn'>
//         Back Home
//       </Link>
//     </section>
//   </Wrapper>
}

const Container = styled.div`
    height: 65vh;
    background: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Wrapper = styled.main``

const Code = styled.h1`
    font-size: 175px;
`

const Description = styled.h3`
    font-size: 30px;
    margin-bottom: 40px;
`

const Button = styled(Link)`
    padding: 10px;
    font-size: 20px;
    border: 1px solid black;
    background-color: transparent;
    color: black;
    text-decoration: none;
    cursor: pointer;
`

export default ErrorPage
