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
  date: { day: null, month: null, year: null },
  status: null,
  isLoading: false,
  error: null,
};
const error = 'Error'
const loading = 'Loading'

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

    [addOutgoingTransaction.fulfilled](state, action) {},
    [addOutgoingTransaction.pending](state, action) {},
    [addOutgoingTransaction.rejected](state, action) {},

    [addIncomingTransaction.fulfilled](state, action) {},
    [addIncomingTransaction.pending](state, action) {},
    [addIncomingTransaction.rejected](state, action) {},

    [getIncTransDate.fulfilled](state, action) {
      state.transactionsInc.push(action.payload);
    },
    [getIncTransDate.pending](state, action) {},
    [getIncTransDate.rejected](state, action) {},

    [getOutTransDate.fulfilled](state, action) {
      state.transactionsOut.push(action.payload);
    },
    [getOutTransDate.pending](state, action) {},
    [getOutTransDate.rejected](state, action) {},

    [deleteTransaction.fulfilled]: (state, action) => {
      state.items = [...state.transactionsOut,...state.transactionsInc].filter((item) => item.id !== action.payload)
      state.status = null
      state.error = null
      state.isDeleting = false
    },
     [deleteTransaction.pending]: (state) => {
      state.status = loading
      state.error = null
      state.isDeleting = true
    },
    [deleteTransaction.rejected]: (state) => {
      state.status = null
      state.error = error
      state.isDeleting = false
    },
  },
});

export const { addDate } = transactionSlice.actions;

export default transactionSlice.reducer;
