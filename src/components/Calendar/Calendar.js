import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Calendar.module.css';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
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
