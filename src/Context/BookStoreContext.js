import React from 'react'

const BookStoreContext = React.createContext({
  isDark: false,
  onToggleDarkTheme: () => {},
  cartList:[],
  addToCart:()=>{},
  removeFromCart:()=>{},
  onIncrementQuantity:()=>{},
  onDecrementQuantity:()=>{}
})

export default BookStoreContext