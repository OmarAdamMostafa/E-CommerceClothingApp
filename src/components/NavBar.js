import React from 'react'
import styled from 'styled-components'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:"gray", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Clothster</Logo>
            </Center>
            <Right>
                <Link>Register</Link>
                <Link>Sign In</Link>
                <Link>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex; // To make the children horizontal
    align-items: center;
    justify-content: space-between;
`

// Left side of navbar
const Left = styled.div`
    flex: 1; // Number of units
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

// Center of navbar
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

// Right side of navbar
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`
const Link = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

export default NavBar