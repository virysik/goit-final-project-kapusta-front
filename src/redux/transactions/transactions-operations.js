import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://kapusta-team-project.herokuapp.com/api';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const getTransactionsByDay = createAsyncThunk(
  '/transactions',
  async (credentials, { rejectWithValue }) => {
    try {
      const transactions = await axios.get('/transactions', {
        params: credentials,
      });
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addOutgoingTransaction = createAsyncThunk(
  '/transactions/addOutgoing',
  async (credentials, { rejectWithValue }) => {
    try {
      const transactions = await axios.post(
        '/transactions/outgoings',
        credentials,
      );
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addIncomingTransaction = createAsyncThunk(
  '/transactions/outgoings',
  async (credentials, { rejectWithValue }) => {
    try {
      const transactions = await axios.post(
        '/transactions/outgoings',
        credentials,
      );
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  '/transactions/outgoings',
  async (credentials, { rejectWithValue }) => {
    try {
      const transactions = await axios.delete(
        '/transactions/outgoings',
        credentials,
      );
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const operations = {
  getTransactionsByDay,
  addOutgoingTransaction,
  deleteTransaction,
};
export default operations;
