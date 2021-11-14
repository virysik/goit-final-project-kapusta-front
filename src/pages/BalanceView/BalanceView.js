import React from 'react';
import Container from 'components/Container';
import BalanceViewTab from 'components/BalanceViewTab';
import BalanceViewMob from 'components/BalanceViewMob';
import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './BalanceView.module.css';
import { Toaster } from 'react-hot-toast';
// import IncomesBalance from 'components/IncomesBalance';
// import Balance from 'components/Balance';
// import Calendar from 'components/Calendar';

const BalanceView = () => {
  const viewPort = useWindowDimensions();
  let type = 'expenses';
  return (
    <section className={s.section}>
      {/* <Container> */}
      {viewPort.width < 768 && <BalanceViewMob type={type} />}
      {viewPort.width >= 768 && <BalanceViewTab type={type} />}
      {/* <Balance />
        <Calendar />
        <IncomesBalance /> */}
      <Toaster />
      {/* </Container> */}
    </section>
  );
};

export default BalanceView;
