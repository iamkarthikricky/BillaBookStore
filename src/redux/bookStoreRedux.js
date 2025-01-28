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

            const cartList = JSON.stringify(state.cartList)
            const isItemAdded = state.cartList.find(eachItem=>eachItem.id === '1')
            if (isItemAdded){
              console.log('added already')
            }
            else{
              const updatedCartList=[...cartList,bookData]
              state.cartList.push(updatedCartList)
            }
        }
    }

})


export const {toggleDarkMode,addToCart} = bookStoreManager.actions

export default bookStoreManager.reducer