import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/Authentication/userSlice';
import { cartSlice } from '../features/Cart/cartSlice';
import { productSlice } from '../features/Products/productSlice';
const rootReducer = {
  user: userSlice.reducer,
  products: productSlice.reducer,
  cart: cartSlice.reducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
