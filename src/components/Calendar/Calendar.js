import { useEffect, useState } from 'react';
import { addDate } from 'redux/transactions/transactions-slice';
import { transactionsSelectors } from 'redux/transactions';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Calendar.module.css';

const months = [
  { Jan: 1 },
  { Feb: 2 },
  { Mar: 3 },
  { Apr: 4 },
  { May: 5 },
  { Jun: 6 },
  { Jul: 7 },
  { Aug: 8 },
  { Sep: 9 },
  { Oct: 10 },
  { Nov: 11 },
  { Dec: 12 },
];

export default function Calendar() {
  // const m = useSelector(transactionsSelectors.getMonth);
  // const d = useSelector(transactionsSelectors.getDay);
  // const y = useSelector(transactionsSelectors.getYear);
  const [startDate, setStartDate] = useState(new Date());

  const splittedDate = String(startDate).split(' ');
  const correctM = months.find(el => el[splittedDate[1]]);

  const [year, setYear] = useState(splittedDate[3]);
  const [month, setMonth] = useState(correctM[splittedDate[1]]);
  const [day, setDay] = useState(splittedDate[2]);

  useEffect(() => {
    dispatch(addDate({ month, day, year }));
  }, []);

  const dispatch = useDispatch();

  const handleDateChange = date => {
    setStartDate(date);
    // const splitDate = String(date).split(' ');
    // const correctMonth = months.find(el => el[splitDate[1]]);
    // setMonth(correctMonth[splitDate[1]]);
    // setDay(splitDate[2]);
    // setYear(splitDate[3]);
    // dispatch(addDate({ month, day, year }));
  };

  const handleDateSelect = date => {
    setStartDate(date);
    const splitDate = String(date).split(' ');
    const correctMonth = months.find(el => el[splitDate[1]]);
    setMonth(correctMonth[splitDate[1]]);
    setDay(splitDate[2]);
    setYear(splitDate[3]);
    dispatch(addDate({ month, day, year }));
  };

  return (
    <div className={s.calendarWrapper}>
      <span className={s.watch}></span>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onSelect={handleDateSelect}
        onChange={handleDateChange}
        className={s.datePicker}
      />
    </div>
  );
}
