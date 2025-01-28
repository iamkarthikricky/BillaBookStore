import styled from "styled-components"

export const CartEmptyText=styled.p`

    font-size:18px;
    text-align:right;
    margin-left:30px;
    margin-top:10px;
    color:${props=>props.$isDark ? '#f0f0f0':'#001e2b'}
`

export const CartEmptyHappyText=styled.p`
    font-size:15px;
    text-align:right;
    font-style:italic;
    margin-left:30px;
    color:${props=>props.$isDark ? 'gray':'#5c6c75bf'}
`

export const AddOnBtn=styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color:${props=>props.$isDark ? '#ffffff':'#000000'}
`;

export const CartBookName=styled.p`
     color:${props=>props.$isDark ? '#ffffff':'#000000'}
`;
export const CartBookPublisher=styled.span`
     color:${props=>props.$isDark ? '#ffffff':'gray'}
`;