const getTotalBalance = state => {};
const getMonthlyBalances = state => {};
const getTransactionsPerDay = state => {};
const getTransactionsPerMonth = state => {};
const getLoader = state => {};
const getTransactionError = state => {};

// получить день, месяц,год

const getMonth = state => state.transactions.date.month;
const getYear = state => state.transactions.date.year;
const getDay = state => state.transactions.date.day;

///////////////////////////////

export {
  getTotalBalance,
  getMonthlyBalances,
  getTransactionsPerDay,
  getTransactionsPerMonth,
  getLoader,
  getTransactionError,
  getMonth,
  getYear,
  getDay,
};
