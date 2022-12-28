import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice';
import { logger } from 'redux-logger';

import productSlice from '../features/product/productSlice';

 const store = configureStore({
  reducer: {
    cart:cartSlice,
    products:productSlice,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(),

})

export default store;


