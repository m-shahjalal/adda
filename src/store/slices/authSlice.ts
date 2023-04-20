import { createSlice } from '@reduxjs/toolkit';
import { getStorage, setStorage } from './../../utils/storage';

const accessToken = getStorage('accessToken');
const userCredential = getStorage('user');
const isAuthenticated = getStorage('isAuthenticated');

const initialState = {
  isAuthenticated: Boolean(isAuthenticated),
  token: accessToken,
  user: userCredential,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.accessToken;
      state.user = { ...action.payload.user };
      setStorage('accessToken', state.token);
      setStorage('user', state.user);
      setStorage('isAuthenticated', state.isAuthenticated);
    },
  },
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
