const getTotalBalance = state => state.transactions.totalBalance;
const getTransactionsPerMonth = state => state.transactions.transactionsMonthYear;
const getLoader = state => state.transactions.loader;
const getTransactionError = state => state.transactions.error;

export {
    getTotalBalance,
    getTransactionsPerMonth,
    getTransactionError,
    getLoader,
};