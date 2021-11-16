// const getMonthlyBalances = state => {};
// const getTransactionsPerDay = state => {};
// const getTransactionsPerMonth = state => {};
// const getLoader = state => {};
// const getTransactionError = state => { };

const getIsDeleting = state => state.transactions.isDeleting;

// получить день, месяц,год //

const getMonth = state => state.transactions.date.month;
const getYear = state => state.transactions.date.year;
const getDay = state => state.transactions.date.day;

///////////////получить тразакции расходов/доходов для таблици на 2ой странице////////////////

const getOutTrans = state => state.transactions.transactionsOut;
const getIncTrans = state => state.transactions.transactionsInc;
const getAllTrans = state => state.transactions.transactionsAll;

export {
  //   getMonthlyBalances,
  //   getTransactionsPerDay,
  //   getTransactionsPerMonth,
  //   getLoader,
  //   getTransactionError,
  getMonth,
  getYear,
  getDay,
  getIncTrans,
  getOutTrans,
  getIsDeleting,
  getAllTrans,
};
