import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.pending](state) {
      state.error = null;
    },
    [register.rejected](state, action) {
      if (action.payload) {
        state.error = action.payload.errors.message;
      } else {
        state.error = action.error.message;
      }
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.pending](state) {
      state.error = null;
    },
    [logIn.rejected](state, action) {
      if (action.payload) {
        state.error = action.payload.errors.message;
      } else {
        state.error = action.error.message;
      }
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [logOut.pending](state) {
      state.error = null;
    },
    [logOut.rejected](state, action) {
      state.error = action.error.message;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
