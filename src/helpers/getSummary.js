import * as api from '../services/transactionsApi';
import { getMonth } from 'helpers';

const getSummary = async (year, type, setSummary) => {
  let result = [];
  if (!type) {
    const { data } = await api.getSummaryOut(year);
    result = data.result;
  }

  if (type) {
    const { data } = await api.getSummaryInc(year);
    result = data.result;
  }

  result.sort((a, b) => a.month - b.month);

  getMonth(result);
  setSummary(result);
};

export default getSummary;
