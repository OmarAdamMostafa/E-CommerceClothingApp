import React from 'react'
import styled from 'styled-components'
import { menuItems } from '../data'


const DropDownMenu = ({index}) => {
  
  const {subMenu} = menuItems[index];

  return (
    <Container>
        <Lists>
            <OuterList>
                {
                    subMenu.map((list)=>{
                        return (
                            <OuterListItem key={list.id}>
                                {list.text}
                                <InnerList>
                                    {
                                        list.subMenu.map((item)=>{
                                            return (
                                                <InnerListItem key={item.id}>
                                                    {item.text}
                                                </InnerListItem>
                                            )
                                        })
                                    }
                                </InnerList>
                            </OuterListItem>
                        )
                    })
                }
            </OuterList>
        </Lists>
    </Container>
  )
}

const Container = styled.div`
    
`
const Lists = styled.div`
    
`
const OuterList = styled.div`
    display: flex;
`
const OuterListItem = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 60px;
    
`
const InnerList = styled.div`
    display: flex;
    flex-direction: column;
`
const InnerListItem = styled.button`
    font-size: 15px;
    font-weight: 500;   
    border: none;
    background-color: transparent;
    margin-top: 7.5px;
    text-align: left;
    padding-left: 0px;

    &:hover {
        color: gray;
    }
`

export default DropDownMenu