import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-team-project.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  '/users/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (!error.response) {
        throw new Error('Register failed');
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const logIn = createAsyncThunk(
  '/users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (!error.response) {
        throw new Error('LogIn failed');
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const setUserBalance = createAsyncThunk(
  '/users/setUserBalance',
  async (newBalance, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users', newBalance);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  '/users/',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  setUserBalance,
};
export default operations;
