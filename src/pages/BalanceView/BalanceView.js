import React from 'react';
import Container from 'components/Container';
import s from './BalanceView.module.css';
import Balance from 'components/Balance';

const BalanceView = () => {
  return (
    <section className={s.section}>
      <Container>
        <Balance />
      </Container>
    </section>
  );
};

export default BalanceView;
