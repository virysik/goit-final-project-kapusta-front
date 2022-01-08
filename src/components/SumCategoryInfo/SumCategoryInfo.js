import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { calendarSelectors } from '../../redux/extraInfo';
import { useDetailInfoForReportQuery } from '../../services/rtk-transactions';
import CategoryInfo from 'components/CategoryInfo';
import {
  addCurrentType,
  addCurrentCategory,
} from 'redux/extraInfo/extraInfo-slice';
import s from './SumCategoryInfo.module.css';

export default function SumCategoryInfo() {
  const [typeTrans, setTypeTrans] = useState('expenses');
  const dispatch = useDispatch();

  const month = useSelector(calendarSelectors.getMonth);
  const year = useSelector(calendarSelectors.getYear);
  const { data } = useDetailInfoForReportQuery({ year, month });

  function handleClick() {
    if (typeTrans === 'incomings') {
      setTypeTrans('expenses');
      dispatch(addCurrentType('expenses'));
      dispatch(addCurrentCategory('Продукты'));
    }

    if (typeTrans === 'expenses') {
      setTypeTrans('incomings');
      dispatch(addCurrentType('incomings'));
      dispatch(addCurrentCategory('ЗП'));
    }
  }

  return (
    <div className={s.sectionWrapper}>
      <div className={s.wrapper}>
        <button
          className={s.leftBtn}
          type="button"
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowLeft size={20} style={{ color: '#FF751D' }} />
        </button>
        {typeTrans === 'expenses' ? (
          <p className={s.title}> Расходы </p>
        ) : (
          <p className={s.title}> Доходы </p>
        )}
        <button
          className={s.rightBtn}
          type="button"
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowRight size={20} style={{ color: '#FF751D' }} />
        </button>
      </div>
      <>
        {typeTrans === 'expenses' ? (
          <CategoryInfo trans={data?.data.expenses} />
        ) : (
          <CategoryInfo trans={data?.data.incomings} />
        )}
      </>
    </div>
  );
}
