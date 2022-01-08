import { getMonth } from 'helpers';

const getSummary = async (type, setSummary, summaryOut, summaryInc) => {
  let result = null;
  await summaryOut;
  await summaryInc;
  type ? (result = summaryInc) : (result = summaryOut);
  let res = null;
  if (result) {
    let result2 = result && [...result].sort((a, b) => a.month - b.month);
    res = getMonth(result2);
    setSummary(res);
  }
  return;
};

export default getSummary;
