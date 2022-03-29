import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { userApi } from '../../api/userApi';

export const addUser = createAsyncThunk(
  'user/addUser',
  async (userData, thunkAPI) => {
    try {
      const response = await userApi.addUser(
        userData
      );

      localStorage.setItem(
        'userDataReactShop',
        JSON.stringify(response.data)
      );
      localStorage.setItem(
        'loginReactShop',
        true
      );

      return userData;
    } catch (err) {
      localStorage.setItem(
        'userDataReactShop',
        JSON.stringify(userData)
      );
      localStorage.setItem(
        'loginReactShop',
        true
      );

      return userData;
    }
  }
);
const initialState = {
  login: false,
  data: {
    userData:
      JSON.parse(
        localStorage.getItem('userDataReactShop')
      ) || {},
    loginData:
      JSON.parse(
        localStorage.getItem('loginDataReactShop')
      ) || {},
    products: {},
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.login = true;
      localStorage.setItem(
        'loginReactShop',
        true
      );
      localStorage.setItem(
        'loginDataReactShop',
        JSON.stringify(action.payload)
      );

      state.data.loginData = action.payload;
    },
    logout: (state) => {
      state.login = false;
      state.data.loginData = {};
      state.data.userData = {};
      localStorage.setItem(
        'loginReactShop',
        false
      );
    },
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      state.login = true;
      state.data.userData = action.payload;
    },
  },
});
export const { login, logout } =
  userSlice.actions;
