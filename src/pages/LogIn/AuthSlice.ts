import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Token, TokenInfo, User, UserInfo } from '@models/User';

const initialState: TokenInfo = {
  accessToken: undefined,
  isAuth: false,
  userInfo: null,
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    logout: () => {
      return initialState;
    },
    setToken: (state, action: PayloadAction<Token>) => {
      state.accessToken = action.payload.accessToken;
      state.isAuth = true;
    },
    setStorageUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    getToken: (state) => {
      return state;
    },
  },
});


export const { logout, setToken, getToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
