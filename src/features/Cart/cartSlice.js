import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(
  localStorage.getItem('cartReactShop')
) || {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existItemId = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.option === action.payload.option
      );

      if (existItemId >= 0) {
        state.cart[existItemId].quantity +=
          action.payload.quantity;
        localStorage.setItem(
          'cartReactShop',
          JSON.stringify(state)
        );
      } else {
        state.cart.push(action.payload);
        localStorage.setItem(
          'cartReactShop',
          JSON.stringify(state)
        );
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.option !== action.payload.option
      );
      localStorage.setItem(
        'cartReactShop',
        JSON.stringify(state)
      );
    },
  },
});

export const { addToCart, removeFromCart } =
  cartSlice.actions;
