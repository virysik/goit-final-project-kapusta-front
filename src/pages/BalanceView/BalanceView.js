import React from 'react';
import Container from 'components/Container';
import s from './BalanceView.module.css';
import IncomesBalance from 'components/IncomesBalance';
import Balance from 'components/Balance';
import Calendar from 'components/Calendar';

const BalanceView = () => {
  return (
    <section className={s.section}>
      <Container>
        <Balance />
        <Calendar />
        <IncomesBalance />
      </Container>
    </section>
  );
};

export default BalanceView;
