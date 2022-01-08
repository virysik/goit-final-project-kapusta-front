// получить день, месяц,год //

const getDate = state => state.extraInfo.date;
const getMonth = state => state.extraInfo.date.month;
const getYear = state => state.extraInfo.date.year;
const getDay = state => state.extraInfo.date.day;
const getCurrentType = state => state.extraInfo.currentType;
const getCurrentCategory = state => state.extraInfo.currentCategory;

export {
  getDate,
  getMonth,
  getYear,
  getDay,
  getCurrentType,
  getCurrentCategory,
};
