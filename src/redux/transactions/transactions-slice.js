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
};

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

    [deleteTransaction.fulfilled](state, action) {},
  },
});

export const { addDate } = transactionSlice.actions;

export default transactionSlice.reducer;
