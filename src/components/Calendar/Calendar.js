import { useEffect, useState } from 'react';
import { addDate } from 'redux/transactions/transactions-slice';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Calendar.module.css';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const dispatch = useDispatch();
  const splitDate = String(startDate).split(' ');

  useEffect(() => {
    setMonth(splitDate[1]);
    setDay(splitDate[2]);
    setYear(splitDate[3]);
  }, [splitDate]);
  dispatch(addDate({ year, month, day }));
  console.log(month);
  console.log(day);
  console.log(year);

  return (
    <div className={s.calendarWrapper}>
      <span className={s.watch}></span>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={date => setStartDate(date)}
        className={s.datePicker}
      />
    </div>
  );
}
