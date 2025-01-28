import styled from "styled-components";

export const ModalSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-self:center;
    padding: 10px;
    width:auto;
    background-color:${props=>(props.$isDark ? '#000000': '#ffffff')};
    height: auto;
    border-radius: 10px;
`

export const ModalCloseBtn=styled.button`
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    align-self: flex-end;
    color:${props=>(props.$isDark ? '#ffffff': '#000000')}`


export const BookTitle=styled.h1`
    font-size: 20px;
    font-weight: bolder;
    color: ${props=>(props.$isDark ? '#ffffff': '#21313c')};
`
export const BookAuthors=styled.p`
    font-size: 16px;
    font-weight: 200;
    color: ${props=>(props.$isDark ? '#ffffff':  '#889397' )};
`

export const BookInfo=styled.p`
    font-size: 16px;
    color: ${props=>(props.$isDark ? '#ffffff' : '#21313c')};
`

export const QuantityContainer=styled.div`
    color:${props=>(props.$isDark ? '#ffffff':'#21313c')};
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const RetailPrice=styled.span`
    color:${props=>(props.$isDark ? '#DB3030' : '#21313C' )};
    font-size:17px;
    font-weight:bold;
`

export const ListPrice=styled.span`
    color:${props=>(props.$isDark ? '#ffffff' : '#21313C' )};
    font-size:17px;
    font-weight:bold;
`