import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'components/Container';
import ArrowToGoBack from 'components/ArrowToGoBack';
import Report from 'components/Report';
import InputBalanceReport from 'components/InputBalanceReport';
import ExpensesIncome from 'components/ExpensesIncome';
import { useDispatch,useSelector } from 'react-redux'
import ChartView from 'components/ChartView';
import s from './ReportView.module.css';
import {
  transactionsOperations,
  transactionsSelectors,
} from 'redux/transactions';

const ReportsView = () => {

   const currentCatDetails = useSelector(transactionsSelectors.getFilteredCategoryExpenses);
  
  console.log(currentCatDetails?.details); //


  const [type, setType] = useState('expenses');
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(transactionsOperations.getDetailInfo({year: 2021, month: 11}))
  // Safe to add dispatch to the dependencies array
  }, [dispatch])


  return (
    <section className={s.section}>
      <Container>
        <div className={s.contentWrapper}>
          <ArrowToGoBack />
          <div className={s.insideWrapper}>
            <Report />
            <InputBalanceReport />
          </div>
        </div>
        <ExpensesIncome />
        <ChartView type={type} />
      </Container>
    </section>
  );
};

export default ReportsView;
