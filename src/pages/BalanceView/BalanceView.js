import React from 'react';
import Container from 'components/Container';
import s from './BalanceView.module.css';
import TableDesktop from "components/IncomesTable/Table/Table"

const BalanceView = () => {
  return (
    <section className={s.section}>
      <Container>
        <TableDesktop />
      </Container>
    </section>
  );
};

export default BalanceView;
