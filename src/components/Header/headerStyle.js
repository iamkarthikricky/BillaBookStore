import styled from 'styled-components';

export const HeaderMainContainer=styled.div`
    background-color: ${props=>(props.$isDark ? '#000000':'#FFFFFF')};
`

export const IconsMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    color:${props=>props.$isDark ? '#ffffff' : '#000000'};
`

export const HeaderUlList=styled.ul`
    background-color:${props=>props.$isDark ? '#000' : '#f9f9f9'};
    width:auto;
    padding:0;
    border-radius: 10px;
    max-height:300px;
    overflow-y: scroll;

`;

export const BookTitle=styled.h1`
    font-size:12px;
    color:${props=>props.$isDark ? '#f9f9f9':'#000000'};
    margin: 0;
    line-height: 1.2;
    @media and screen (min-width:768px){
        font-size: 16px;
    }
`;


export const BookAuthor=styled.p`
    color:${props=>props.$isDark ? '#f9f9f9':'#000000'};
    margin-top: 5px;
    font-size: 12px;
    color: #5C6C75;
    font-weight: 600;
    @media and screen (min-width:768px){
        font-size: 16px;
    }
`;