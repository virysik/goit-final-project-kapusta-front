import React from 'react';
import { Container } from 'components/Container';
import Balance from "components/Balance";
import OnLoader from 'components/OnLoader';

const BalanceView = () => {
  return (
    <Container>
      <Balance />
      <OnLoader />
    </Container>
  );
};

export default BalanceView;
