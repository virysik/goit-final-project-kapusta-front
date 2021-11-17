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


//   const [state, setState] = useState();

//   const sumOfcategories = useSelector(transactionsSelectors.getDetailsInfoByExpenses);

// const getUsers = async () => {

//   const result = await sumOfcategories;
  
//   return setState(result)
//   }


const ReportsView = () => {

  const currentType = useSelector(transactionsSelectors.getCurrentType);

  // dispatch(transactionsReducer.addCurrentCategory(item.category))

  // const [type, setType] = useState();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(transactionsOperations.getDetailInfo({year: 2021, month: 11}))
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
        <ChartView type={currentType} />
      </Container>
    </section>
  );
};

export default ReportsView;
