import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionsByDay,
  addOutgoingTransaction,
  addIncomingTransaction,
  deleteTransaction,
} from './transactions-operations';

const initialState = {
  transactions: [],
  date: {
    day: null,
    month: null,
    year: null,
  },
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducer: {
    addDate: (state, action) => {
      state.date.day = action.payload.day;
      state.date.month = action.payload.month;
      state.date.year = action.payload.year;
    },
  },
  extraReducers: {
    [getTransactionsByDay.fulfilled](state, action) {},
    [addOutgoingTransaction.fulfilled](state, action) {
      state.transactions = state.transactions.push(action.paylod);
    },
    [addOutgoingTransaction.pending](state, action) {},
    [addOutgoingTransaction.rejected](state, action) {},
    [addIncomingTransaction.fulfilled](state, action) {},
    [deleteTransaction.fulfilled](state, action) {},
  },
});

export const { addDate } = transactionSlice.actions;
export default transactionSlice.reducer;
