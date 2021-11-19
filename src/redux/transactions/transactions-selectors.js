import { createSelector } from 'reselect';

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

const getInfoExpenses = state => state.transactions.raport.expenses;

const getInfoIncomings = state => state.transactions.raport.incomings;

const getCurrentType = state => state.transactions.currentType;

const getRaport = state => state.transactions.raport;

const getFilteredCategExp = createSelector(
  [getInfoExpenses, getCurrentCategory],
  (arr, category) => arr?.find(ar => ar.category === category)?.details,
);

const getFilteredCategInc = createSelector(
  [getInfoIncomings, getCurrentCategory],
  (arr, category) => arr?.find(ar => ar.category === category)?.details,
);
///////////////////////////////////////

// const getCurrCatExpDet = createSelector([getFilteredCategExp], arr =>
//   arr?.map(el => el.details),
// );
// получить расход/доход за месяц на 3ей странице//Вера

const getIncReportMonthly = state => state.transactions.entities.total[0].sum;
const getExpReportMonthly = state => state.transactions.entities.total[1].sum;
const getReportMonthly = createSelector(
  [getIncReportMonthly, getExpReportMonthly],
  (inc, exp) => inc - exp,
);

export {
  getDate,
  getMonth,
  getYear,
  getDay,
  getIncTrans,
  getOutTrans,
  getIsDeleting,
  getCurrentCategory,
  getFilteredCategExp,
  getFilteredCategInc,
  // getCurrCatExpDet,
  getInfoExpenses,
  getInfoIncomings,
  getCurrentType,
  getAllTrans,
  getReportMonthly,
  getIncReportMonthly,
  getExpReportMonthly,
  getRaport,
};
