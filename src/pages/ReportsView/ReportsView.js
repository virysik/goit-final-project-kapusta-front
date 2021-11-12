import React from 'react';
import { useState } from 'react';
import Container from 'components/Container';
import ArrowToGoBack from 'components/ArrowToGoBack';
import Report from 'components/Report';
import InputBalanceReport from 'components/InputBalanceReport';
import ExpensesIncome from 'components/ExpensesIncome';

import ChartView from 'components/ChartView';
import s from './ReportView.module.css';

const ReportsView = () => {
  const [type, setType] = useState('expenses');

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
