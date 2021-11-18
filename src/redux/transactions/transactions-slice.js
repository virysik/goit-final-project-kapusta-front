import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionsByDay,
  addOutgoingTransaction,
  addIncomingTransaction,
  deleteTransaction,
  getOutTransDate,
  getIncTransDate,
  getDetailInfo
} from './transactions-operations';

const splittedDate = new Date().toLocaleDateString().split('.');
const year = splittedDate[2];
const month = splittedDate[1];
const day = splittedDate[0];

const initialState = {
  transactionsOut: [],
  transactionsInc: [],
  currentCategory: 'Продукты',
  currentType: 'expenses',
  entities:[],
  date: { day, month, year },
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
    addCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    addCurrentType: (state, action) => {
      state.currentType = action.payload;
    }

  },
  extraReducers: {
    [getTransactionsByDay.fulfilled](state, action) {},

    [addOutgoingTransaction.fulfilled](state, action) {
      state.transactionsOut = [...state.transactionsOut, action.payload];
    },
    [addOutgoingTransaction.pending](state, action) {},
    [addOutgoingTransaction.rejected](state, action) {},

    [addIncomingTransaction.fulfilled](state, action) {
      state.transactionsInc = [...state.transactionsInc, action.payload];
    },
    [addIncomingTransaction.pending](state, action) {},
    [addIncomingTransaction.rejected](state, action) {},

    [getIncTransDate.fulfilled](state, action) {
      state.transactionsInc = action.payload;
    },
    [getIncTransDate.pending](state, action) {},
    [getIncTransDate.rejected](state, action) {},

    [getOutTransDate.fulfilled](state, action) {
      state.transactionsOut = action.payload;
    },
    [getOutTransDate.pending](state, action) {},
    [getOutTransDate.rejected](state, action) {},

    [deleteTransaction.fulfilled]: (state, action) => {
      state.transactionsOut = [...state.transactionsOut].filter(
        item => item._id !== action.payload,
      );
      state.transactionsInc = [...state.transactionsInc].filter(
        item => item._id !== action.payload,
      );
      state.isDeleting = false;
      state.error = null;
    },
    [deleteTransaction.pending]: state => {
      state.error = null;
      state.isDeleting = true;
    },
    [deleteTransaction.rejected]: state => {
      state.error = 'error';
      state.isDeleting = false;
    },
/// Vlad
    [getDetailInfo.fulfilled](state, action) {
      state.entities = action.payload.data.data;
    },
    [getDetailInfo.pending](state, action) {},
    [getDetailInfo.rejected](state, action) { },
    
  },
});

export const { addDate, addCurrentCategory, addCurrentType } = transactionSlice.actions;

export default transactionSlice.reducer;
