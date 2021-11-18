import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionsByDay,
  addOutgoingTransaction,
  addIncomingTransaction,
  deleteTransaction,
  getOutTransDate,
  getIncTransDate,
  getDetailInfo,
  getDetailInfoForReport
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
  entities: {
    expenses: [],
    incomings: [],
    total: [
      { type: 'incomings', sum: 0 },
      { type: 'expenses', sum: 0 },
    ],
  },
  date: { day, month, year },
  raport:[],
  isDeleting: false,
  error: null,
};

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
    },
    goBackOneMonth: (state, action) => {
      if (Number(state.date.month) === 1) {
        state.date.year = Number(state.date.year) - 1;
        state.date.month = 12;
        return;
      }

      state.date.month = Number(state.date.month) - 1;
    },
    goForwardOneMonth: (state, action) => {
      if (Number(state.date.month) === 12) {
        state.date.year = Number(state.date.year) + 1;
        state.date.month = 1;
        return;
      }

      state.date.month = Number(state.date.month) + 1;
    },
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
      console.log('state.entities: ', state.entities);
    },
    [getDetailInfo.pending](state, action) {},
    [getDetailInfo.rejected](state, action) { },

    [getDetailInfoForReport.fulfilled](state, action) {
      state.raport = action.payload.data;
    },
    [getDetailInfoForReport.pending](state, action) {},
    [getDetailInfoForReport.rejected](state, action) { },
    
  },
});

export const {
  addDate,
  addCurrentCategory,
  addCurrentType,
  goBackOneMonth,
  goForwardOneMonth,
} = transactionSlice.actions;

export default transactionSlice.reducer;
