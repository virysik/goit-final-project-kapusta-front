import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionsByDay,
  addOutgoingTransaction,
  addIncomingTransaction,
  deleteTransaction,
  getOutTransDate,
  getIncTransDate,
} from './transactions-operations';

const initialState = {
  transactionsOut: [],
  transactionsInc: [],
  // transactionsAll: [],
  date: { day: null, month: null, year: null },
  isDeleting: false,
  error: null,
};
const error = 'Error';
const loading = 'Loading';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers: {
    [getTransactionsByDay.fulfilled](state, action) {},

    [addOutgoingTransaction.fulfilled](state, action) {
      state.transactionsOut = [...state.transactionsOut, ...action.payload];
    },
    [addOutgoingTransaction.pending](state, action) {},
    [addOutgoingTransaction.rejected](state, action) {},

    [addIncomingTransaction.fulfilled](state, action) {
      state.transactionsInc = [...state.transactionsInc, ...action.payload];
    },
    [addIncomingTransaction.pending](state, action) {},
    [addIncomingTransaction.rejected](state, action) {},

    [getIncTransDate.fulfilled](state, action) {
      // state.transactionsAll = [...state.transactionsOut, ...action.payload];
      state.transactionsInc = action.payload;
    },
    [getIncTransDate.pending](state, action) {},
    [getIncTransDate.rejected](state, action) {},

    [getOutTransDate.fulfilled](state, action) {
      // state.transactionsAll = [...state.transactionsInc, ...action.payload];
      state.transactionsOut = action.payload;
    },
    [getOutTransDate.pending](state, action) {},
    [getOutTransDate.rejected](state, action) {},

    [deleteTransaction.fulfilled]: (state, action) => {
      state.transactionsOut = state.transactionsOut.filter(
        item => item.id !== action.payload,
      );
      state.transactionsInc = state.transactionsInc.filter(
        item => item.id !== action.payload,
      );
      state.isDeleting = false;
      state.error = null;
    },
    [deleteTransaction.pending]: state => {
      state.error = null;
      state.isDeleting = true;
    },
    [deleteTransaction.rejected]: state => {
      state.error = error;
      state.isDeleting = false;
    },
  },
});

export const { addDate } = transactionSlice.actions;

export default transactionSlice.reducer;
