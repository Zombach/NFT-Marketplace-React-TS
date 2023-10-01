import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/store/Store';
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
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { logout, setToken, setUserInfo } = authSlice.actions;
export const selectToken = (state: RootState) => state.authState.accessToken;
export const selectIsAuth = (state: RootState) => state.authState.isAuth;

export const authReducer = authSlice.reducer;
