import { createSelector } from 'reselect';
// const getMonthlyBalances = state => {};
// const getTransactionsPerDay = state => {};
// const getTransactionsPerMonth = state => {};
// const getLoader = state => {};
// const getTransactionError = state => { };

const getIsDeleting = state => state.transactions.isDeleting;

// получить день, месяц,год //

const getDate = state => state.transactions.date;
const getMonth = state => state.transactions.date.month;
const getYear = state => state.transactions.date.year;
const getDay = state => state.transactions.date.day;

///////////////получить тразакции расходов/доходов для таблици на 2ой странице////////////////

const getOutTrans = state => state.transactions.transactionsOut;
const getIncTrans = state => state.transactions.transactionsInc;
const getAllTrans = state => state.transactions.transactionsAll;

///////////////получить тразакции расходов/доходов для графика на 3-ей странице//////////////// Влад
const getCurrentCategory = state => state.transactions.currentCategory;
const getDetailsInfo = state => state.transactions.entities;
const getDetailsInfoByExpenses = state => state.transactions.entities.expenses;
const getDetailsInfoByIncomings = state => state.transactions.entities.incomings;
const getCurrentType = state => state.transactions.currentType;

const getFilteredCategoryExpenses = createSelector(
  [getDetailsInfoByExpenses, getCurrentCategory],
  (arr, category) =>
    arr?.filter(ar => ar.category === category )[0],
);

const getFilteredCategoIncomings = createSelector(
  [getDetailsInfoByIncomings, getCurrentCategory],
  (arr, category) =>
    arr?.filter(ar => ar.category === category )[0],
);

export {
  //   getMonthlyBalances,
  //   getTransactionsPerDay,
  //   getTransactionsPerMonth,
  //   getLoader,
  //   getTransactionError,
  getDate,
  getMonth,
  getYear,
  getDay,
  getIncTrans,
  getOutTrans,
  getIsDeleting,
  getDetailsInfo,
  getCurrentCategory,
  getFilteredCategoryExpenses,
  getFilteredCategoIncomings,
  getDetailsInfoByExpenses,
  getCurrentType,
  getAllTrans,
};
