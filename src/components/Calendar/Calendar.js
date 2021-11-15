import { useEffect, useState } from 'react';
import { addDate } from 'redux/transactions/transactions-slice';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Calendar.module.css';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  const updateDate = date => {
    const splittedDate = date.toLocaleDateString().split('.');
    const year = splittedDate[2];
    const month = splittedDate[1];
    const day = splittedDate[0];
    dispatch(addDate({ month, day, year }));
  };

  useEffect(() => {
    updateDate(startDate);
  }, []);

  const dispatch = useDispatch();

  const handleDateChange = date => {
    setStartDate(date);
    updateDate(date);
  };

  return (
    <div className={s.calendarWrapper}>
      <span className={s.watch}></span>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={handleDateChange}
        className={s.datePicker}
      />
    </div>
  );
}
