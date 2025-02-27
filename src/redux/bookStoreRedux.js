import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isDark:false,
    cartList:[],
}

const bookStoreManager= createSlice({
    name:"billaBookStore",
    initialState,
    reducers:{
        toggleDarkMode:(state)=>{
            state.isDark = !state.isDark
        },
        addToCart:(state,action)=>{
            const {bookData} = action.payload

            console.log(`bookData`,bookData)

            const isItemAdded = state.cartList.find(eachItem=>eachItem.id === bookData.id)
           
            if (isItemAdded){
              console.log('added already')
            }
            else{
              const updatedCartList=[...state.cartList,bookData]
              console.log(`updatedCartList`,updatedCartList)
              state.cartList = updatedCartList
            }
        },
        incrementQuantity:(state,action)=>{
            const {id} = action.payload
            const updatedCartList = state.cartList.map(eachItem=>{
                if(eachItem.id === id){
                    return {...eachItem,quantity:eachItem.quantity+1}
                }
                return eachItem
            })
            state.cartList = updatedCartList
        },
        decrementQuantity:(state,action)=>{
            const {id} = action.payload
            const updatedCartList = state.cartList.map(eachItem=>{
                if(eachItem.id === id){
                    return {...eachItem,quantity:eachItem.quantity-1}
                }
                return eachItem
            })
            state.cartList = updatedCartList
        }, 
        removeFromCart:(state,action)=>{
            const {id} = action.payload
            const updatedCartList = state.cartList.filter(eachItem=>eachItem.id !== id)
            state.cartList = updatedCartList
        }, 
    }

})


export const {toggleDarkMode,addToCart,incrementQuantity,decrementQuantity,removeFromCart} = bookStoreManager.actions

export default bookStoreManager.reducer