import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/Authentication/userSlice';
import { productSlice } from '../features/Products/productSlice';
const rootReducer = {
  user: userSlice.reducer,
  products: productSlice.reducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
