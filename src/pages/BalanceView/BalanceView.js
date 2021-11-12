import React from 'react';
import Container from 'components/Container';
import s from './BalanceView.module.css';
import IncomesBalance from 'components/IncomesBalance';

const BalanceView = () => {
  return (
    <section className={s.section}>
      <Container>
        <IncomesBalance />
      </Container>
    </section>
  );
};

export default BalanceView;
