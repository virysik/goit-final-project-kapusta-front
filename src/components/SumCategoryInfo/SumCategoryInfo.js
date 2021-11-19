import s from './SumCategoryInfo.module.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CategoryInfo from 'components/CategoryInfo';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsReducer } from 'redux/transactions';
import {
  transactionsSelectors,
  transactionsOperations,
} from 'redux/transactions';

export default function SumCategoryInfo() {
  const [typeTrans, setTypeTrans] = useState('expenses');
  const month = useSelector(transactionsSelectors.getMonth);
  const year = useSelector(transactionsSelectors.getYear);
  const exp = useSelector(transactionsSelectors.getInfoExpenses);
  const inc = useSelector(transactionsSelectors.getInfoIncomings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.getDetailInfoForReport({ year, month }));
  }, [dispatch, year, month]);

  function handleClick() {
    if (typeTrans === 'incomings') {
      setTypeTrans('expenses');
      dispatch(transactionsReducer.addCurrentType('expenses'));
    }

    if (typeTrans === 'expenses') {
      setTypeTrans('incomings');
      dispatch(transactionsReducer.addCurrentType('incomings'));
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
          <CategoryInfo trans={exp} />
        ) : (
          <CategoryInfo trans={inc} />
        )}
      </>
    </div>
  );
}
