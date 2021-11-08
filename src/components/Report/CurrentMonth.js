import React from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import s from './Report.module.css';

import months from '../../data/month';
console.log(months)

const CurrentMonth = ({
  currentMonth,
  currentYear,
  onHandleClickRight,
  onHandleClickLeft,
}) => {
  const monthToString = String(currentMonth);
  const selectMonth = months.filter(el => el.id === monthToString);
  return (
    <div className={s.reportMonth}>
      <p className={s.title}>Текущий период:</p>
      <div className={s.transactionWrapper}>
        <IoIosArrowBack
          style={{ color: '#FF751D', width: '12' }}
          onClick={onHandleClickLeft}
        />
        {
          <span
            className={s.reportMonthTitle}
          >{`${selectMonth[0]} ${currentYear}`}</span>

          // <span
          //   className={s.reportMonthTitle}
          // >{`${selectMonth[0].name} ${currentYear}`}</span>
        }
        <IoIosArrowForward
          style={{ color: '#FF751D', width: '12' }}
          onClick={onHandleClickRight}
        />
      </div>
    </div>
  );
};
export default CurrentMonth;
