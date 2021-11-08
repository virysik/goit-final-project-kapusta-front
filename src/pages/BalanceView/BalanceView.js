import React from 'react';
import { Container } from 'components/Container';
import OnLoader from 'components/OnLoader';
import Balance from 'components/Balance';

const BalanceView = () => {
  return (
    <Container>
      <Balance />
      <OnLoader />
    </Container>
  );
};

export default BalanceView;
