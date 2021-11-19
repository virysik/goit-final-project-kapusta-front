import React from 'react';
import BalanceViewTab from 'components/BalanceViewTab';
import BalanceViewMob from 'components/BalanceViewMob';
import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './BalanceView.module.css';
import { Toaster } from 'react-hot-toast';

const BalanceView = () => {
  const viewPort = useWindowDimensions();

  return (
    <section className={s.section}>
      {viewPort.width < 768 && <BalanceViewMob />}
      {viewPort.width >= 768 && <BalanceViewTab />}

      <Toaster />
    </section>
  );
};

export default BalanceView;
