import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import s from './Report.module.css';

import months from '../../data/month';

export const CurrentMonth = ({
  currentMonth,
  currentYear,
  onHandleClickRight,
  onHandleClickLeft,
}) => {
  const monthToString = String(currentMonth);
  // const selectMonth = months.filter(el => el.id === monthToString);
  return (
    <div className={s.reportMonth}>
      <p className={s.title}>Текущий период:</p>
      <button type="button" className={s.btn}>
        <IoIosArrowBack
          style={{ color: '#FF751D', width: '14' }}
          onClick={onHandleClickLeft}
        />
      </button>
      {
        <span className={s.reportMonthTitle}>Ноябрь 2020</span>

        // <span
        //   className={s.reportMonthTitle}
        // >{`${selectMonth[0]} ${currentYear}`}</span>
      }
      <button type="button" className={s.btn}>
        <IoIosArrowForward
          style={{ color: '#FF751D', width: '14' }}
          onClick={onHandleClickRight}
        />
      </button>
    </div>
  );
};
