import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { productApi } from '../../api/productApi';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (userId, thunkAPI) => {
    const response =
      await productApi.getAllProducts();
    return response.data;
  }
);
const initState = {
  productsList:
    JSON.parse(
      localStorage.getItem('productsList')
    ) || [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      state.productsList.push(action.payload);
    },
  },
  extraReducers: {
    [getAllProducts.fulfilled]: (
      state,
      action
    ) => {
      localStorage.setItem(
        'productsList',
        JSON.stringify(action.payload)
      );
      state.productsList = action.payload;
    },
  },
});
export const { addProduct } =
  productSlice.actions;
