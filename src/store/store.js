import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../feature/Auth/authSlice.js'
import shopReducer from '../feature/Shop/ShopAuth/shopSlice.jsx'
import productReducer from '../feature/Product/ProductSlice.jsx'
import cartReducer from '../redux/Slices/cartSlice.jsx'
import wishlistReducer from '../redux/Slices/wishlistSlice.jsx'
const store=configureStore({
      reducer:{
          'auth':authReducer,
          'shop':shopReducer,
          'product':productReducer,
          'cart':cartReducer,
          'wishlist':wishlistReducer
      }
})



export default store;