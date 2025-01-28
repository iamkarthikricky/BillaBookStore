import { configureStore } from '@reduxjs/toolkit'
import bookStoreReducer from './bookStoreRedux'


const storeManager = configureStore({
  reducer: {
    billaBookStore: bookStoreReducer
  }
})


export default storeManager