import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { sliderItems } from '../data';
import {mobile} from '../responsive';
import { ArrowLeftOutlinedIcon, ArrowRightOutlinedIcon } from '../assets/Icons';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) =>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                sliderItems.map((item)=>{
                    return <SlideContainer key={item.id} bg={item.bg}>
                                <ImageContainer>
                                    <Image src={item.img}/>
                                </ImageContainer>
                                <InfoContainer>
                                    <Title>{item.title}</Title>
                                    <Description>{item.desc}</Description>
                                    <Button>SHOP NOW</Button>
                                </InfoContainer>
                            </SlideContainer>  
                })
            }
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative; // Must be relative if the children are absolute
    overflow: hidden;
    ${mobile({
        display: 'none'
    })};
`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; 
    cursor: pointer;
    opacity: 0.5;

    // To align the buttons at the centers of the slider sides
    top: 0;
    bottom: 0;
    left: ${(props)=>props.direction === "left" && "10px"};
    right: ${(props)=>props.direction === "right" && "10px"};
    margin: auto;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const SlideContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
    height: 100%; 
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
`
const Title = styled.h1`
    font-size: 70px;    
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`



export default Slider