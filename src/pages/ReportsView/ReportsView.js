import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'components/Container';
import ArrowToGoBack from 'components/ArrowToGoBack';
import Report from 'components/Report';
import InputBalanceReport from 'components/InputBalanceReport';
import ExpensesIncome from 'components/ExpensesIncome';
import { useDispatch, useSelector } from 'react-redux'
import ChartView from 'components/ChartView';
import s from './ReportView.module.css';
import {
  transactionsOperations,
  transactionsSelectors,
} from 'redux/transactions';

const ReportsView = () => {

  const currentType = useSelector(transactionsSelectors.getCurrentType);
  const month = useSelector(transactionsSelectors.getMonth);
  const year = useSelector(transactionsSelectors.getYear);


  const currentCatDetails = useSelector(transactionsSelectors.getFilteredCategoryExpenses);
  // const currentCategory = useSelector(transactionsSelectors.getCurrentType);

  const data = currentCatDetails?.details;
  
  // const [expensesOpt, setExpensesOpt] = useState([]);

  // const getState = async () => {

  //   const result = await currentCatDetails?.details;
  
  //   return setExpensesOpt(result)
  // };

  // getState();


  // console.log(expensesOpt);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(transactionsOperations.getDetailInfo({ year, month }))
    dispatch(transactionsOperations.getDetailInfoForReport({ year:2021, month:11 }))
    
  }, [dispatch, month, year ])

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
        <ChartView type={currentType} data={data} />
      </Container>
    </section>
  );
};

export default ReportsView;
