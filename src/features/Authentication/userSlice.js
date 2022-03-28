import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { userApi } from '../../api/userApi';

export const addUser = createAsyncThunk(
  'user/addUser',
  async (userData, thunkAPI) => {
    const response = await userApi.addUser(
      userData
    );

    localStorage.setItem(
      'userDataReactShop',
      JSON.stringify(response.data)
    );
    return userData;
  }
);
const initialState = {
  login: false,
  data: {
    loginData: {},
    products: {},
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.login = true;
      state.data.loginData = action.payload;
    },
    logout: (state) => {
      state.login = false;
      state.data = {};
    },
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      state.data.loginData = action.payload;
    },
  },
});
export const { login, logout } =
  userSlice.actions;
