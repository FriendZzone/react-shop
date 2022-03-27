import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../features/Products/productSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});
