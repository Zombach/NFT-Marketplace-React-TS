import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TokenInfo, User } from '@models/User';

const initialState: TokenInfo = {
  accessToken: undefined,
  isAuth: false,
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    logout: () => {
      return initialState;
    },
    setToken: (state, action: PayloadAction<TokenInfo>) => {
      state.accessToken = action.payload.accessToken;
      state.isAuth = true;
    },
    getToken: (state) => {
      return state;
    },
  },
});

export default authSlice.reducer;

export const { logout, setToken, getToken } = authSlice.actions;
