import React from 'react'
import styled from 'styled-components'
import { FacebookIcon, InstagramIcon, TwitterIcon, RoomIcon, PhoneIcon, MailOutlineIcon } from '../assets/Icons';
import {mobile} from '../responsive';

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Clothster</Logo>
            <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Id fuga porro nobis quos dolor nam facere. 
                Culpa, provident corrupti. 
                Reiciendis culpa quia commodi provident vitae!
            </Description>
            <SocialContainer>
                <SocialIcon bg="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon bg="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon bg="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <PhoneIcon  style={{marginRight:"10px"}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}} /> contact@clothster.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    ${mobile({
        flexDirection: 'column'
    })};
`


const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props)=> props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        display: 'none'
    })};
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    // Because UL has its own margin and padding by default
    margin: 0;
    padding: 0;

    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        backgroundColor: '#fff8f8'
    })};
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

export default Footer