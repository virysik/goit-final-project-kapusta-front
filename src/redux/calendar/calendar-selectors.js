// получить день, месяц,год //

const getDate = state => state.calendar.date;
const getMonth = state => state.calendar.date.month;
const getYear = state => state.calendar.date.year;
const getDay = state => state.calendar.date.day;

export { getDate, getMonth, getYear, getDay };
