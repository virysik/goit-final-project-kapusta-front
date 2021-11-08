import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import s from './Report.module.css';

import Balance from '../Balance';
import { getTransactionsPerMonth } from 'redux/transactions/transactions-selectors';
import { CurrentAmount, CurrentMonth } from './';
import expenseIconCategories from 'data/expenseIcon';
import incomeIconCategories from 'data/incomeIcon';
import sprite from 'images/svg/icon.svg';
import ArrowToGoBack from '../ArrowToGoBack';
import transactionsOperations from 'redux/transactions/transactions-operations';

const Report = ({
  month,
  year,
  type,
  onHandleClickRight,
  onHandleClickLeft,
  getCategory,
  onHandleChangeType,
}) => {
  const transaction = useSelector(getTransactionsPerMonth);
  const dispatch = useDispatch();
  useEffect(() => {
    if ((month, year)) {
      dispatch(transactionsOperations.getTransactionsMonthYear(month, year));
    }
  }, [dispatch, month, year]);

  const getTransactionByType = type => {
    const filteredByType = transaction.filter(
      transaction => transaction.type === type,
    );
    return filteredByType;
  };

  const findTotalSumByCategory = (type, category) => {
    let totalExpense = 0;
    getTransactionByType(type)
      .filter(tr => tr.category === category)
      .map(el => (totalExpense += el.sum));
    return totalExpense;
  };

  const categories =
    type === 'expense' ? expenseIconCategories : incomeIconCategories;

  return (
    <div className={s.reportContainer}>
      <div className={`${s.navigation} ${s.section}`}>
        <ArrowToGoBack />
        <div className={s.navigationWrapper}>
          <Balance width={true} hide={s.buttonNone}/>
          <CurrentMonth
            currentMonth={month}
            currentYear={year}
            onHandleClickRight={onHandleClickRight}
            onHandleClickLeft={onHandleClickLeft}
          />
        </div>
      </div>
      <CurrentAmount currentMonth={month} currentYear={year} />
      <div className={`${s.reportWrapper} ${s.section}`}>
        <div className={`${s.transactionWrapper} ${s.sectionReportTitle}`}>
          <IoIosArrowBack
            style={{ color: '#FF751D' }}
            fontSize="small"
            onClick={onHandleChangeType}
          />
          {type === 'expense' ? (
            <h1 className={s.reportTitle}>расходы:</h1>
          ) : (
            <h1 className={s.reportTitle}>доходы:</h1>
          )}
          <IoIosArrowForward
            style={{ color: '#FF751D' }}
            fontSize="small"
            onClick={onHandleChangeType}
          />
        </div>
        <ul className={s.reportList}>
          {getTransactionByType(type).length === 0 ? (
            <p>
              Отчет будет доступен после того как вы внесете данные о своих
              доходах и расходах за выбранный период.
            </p>
          ) : (
            categories.map(event => {
              let sum = findTotalSumByCategory(type, event.label);
              if (sum === 0) {
                return null;
              }

              return (
                <li className={s.reportCard} key={event.id}>
                  <p>{`${sum.toLocaleString('ru')}.00`}</p>
                  <svg
                    className={s.iconSvg}
                    title={event.label}
                    onClick={getCategory}
                  >
                    <use
                      xlinkHref={`${sprite}#${event.label}`}
                      title={event.label}
                    />
                  </svg>
                  <p className={s.reportCardTitle}>{event.label}</p>
                </li>
              );
            })
          )}
        </ul>
       </div>
    </div>
  );
};
export default Report;
