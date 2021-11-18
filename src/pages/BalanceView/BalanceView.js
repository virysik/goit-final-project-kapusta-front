import React from 'react';
import BalanceViewTab from 'components/BalanceViewTab';
import BalanceViewMob from 'components/BalanceViewMob';
import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './BalanceView.module.css';
import { Toaster } from 'react-hot-toast';

const BalanceView = () => {
  const viewPort = useWindowDimensions();
  let type = 'expenses';

  return (
    <section className={s.section}>
      {viewPort.width < 768 && <BalanceViewMob type={type} />}
      {viewPort.width >= 768 && <BalanceViewTab type={type} />}

      <Toaster />
    </section>
  );
};

export default BalanceView;
