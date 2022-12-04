import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

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
                    <Input placeholder='Search'/>
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
    ${mobile({
        height: '50px'
    })};
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex; // To make the children horizontal
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: '10px 0px'
    })};
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
    ${mobile({
        display: 'none'
    })};
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
    ${mobile({
        width: '50px'
    })}
`

// Center of navbar
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: '20px'
    })};
`

// Right side of navbar
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
        justifyContent: 'center',
        flex: 2
    })};
    
`
const Link = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
        fontSize: '12px',
        marginLeft: '10px'
    })};
`

export default NavBar