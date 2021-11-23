import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from '../../services/fetchApi';

export const getTransactionsByDay = createAsyncThunk(
  '/transactions/',
  async (credentials, { rejectWithValue }) => {
    try {
      const transactions = await axios.get('/transactions/', {
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
      const { data } = await axios.post('/transactions/outgoings', credentials);
      return data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addIncomingTransaction = createAsyncThunk(
  '/transactions/addIncoming',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transactions/incomings', credentials);
      return data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getIncTransDate = createAsyncThunk(
  '/transactions/getIncTransDate',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transactions/incomings/date', {
        params: credentials,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getOutTransDate = createAsyncThunk(
  '/transactions/getOutTransDate',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transactions/outgoings/date', {
        params: credentials,
      });

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  '/transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/transactions/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getDetailInfo = createAsyncThunk(
  '/transactions/detailInfo',
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

export const getDetailInfoForReport = createAsyncThunk(
  '/transactions/getDetailInfoForReport',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transactions/forReports', {
        params: credentials,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const operations = {
  getTransactionsByDay,
  addOutgoingTransaction,
  deleteTransaction,
  getDetailInfo,
  getDetailInfoForReport,
};
export default operations;
