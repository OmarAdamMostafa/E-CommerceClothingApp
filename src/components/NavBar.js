import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { SearchIcon, ShoppingCartOutlinedIcon, AccountCircleOutlinedIcon } from '../assets/Icons';
import { menuItems } from '../data';
import Badge from '@mui/material/Badge';
import { useDispatch } from 'react-redux'
import { changeMenuItemIndex } from '../features/NavBarFeature/NavBarSlice';

const NavBar = () => { 
    const dispatch = useDispatch()
    const [index, setIndex] = useState(-1)

    return (
    <Container>
        <Wrapper>
            <Left onClick={()=>dispatch(changeMenuItemIndex(0))} onMouseEnter={()=>dispatch(changeMenuItemIndex(0))}>
                <Logo>Clothster</Logo>
            </Left>
            <Center>
                    {
                        menuItems.map((item)=>{
                            return <Button key={item.id} onClick={()=>dispatch(changeMenuItemIndex(menuItems.indexOf(item)))} onMouseEnter={()=>dispatch(changeMenuItemIndex(menuItems.indexOf(item)))}>{item.text}</Button>
                        })
                    }
            </Center>
            <Right onClick={()=>dispatch(changeMenuItemIndex(0))} onMouseEnter={()=>dispatch(changeMenuItemIndex(0))}>
                <NavLink>
                    <SearchIcon sx={{fontSize: 28}}/>
                </NavLink>
                <NavLink>
                    <AccountCircleOutlinedIcon sx={{fontSize: 28}}/>
                </NavLink>
                <NavLink>
                    <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </NavLink>
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
    padding: 14px 20px;
    display: flex; // To make the children horizontal
    align-items: center;
    ${mobile({
        padding: '10px 0px'
    })};
`

// Left side of navbar
const Left = styled.div`
    flex: 1; // Number of units
    align-items: center;
    margin-left: 100px;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: '20px'
    })};
`


// Center of navbar
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Button = styled.button`
    border: none;
    background-color: transparent;
    font-size: 18px;
    margin-left: 40px;
    padding: 0px 20px;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`
// const List = styled.ul`
//     display: flex;
//     align-items: center;
//     flex-wrap: wrap;
//     list-style: none;
// `
// const ListItem = styled.li`
//     position: relative;
// `;

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

// Right side of navbar
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 100px;
    ${mobile({
        justifyContent: 'center',
        flex: 2
    })};
`
const NavLink = styled.div`
    cursor: pointer;
    margin-left: 25px;

    &:hover {
        color: gray;
    }

    ${mobile({
        fontSize: '12px',
        marginLeft: '10px'
    })};
`

export default NavBar