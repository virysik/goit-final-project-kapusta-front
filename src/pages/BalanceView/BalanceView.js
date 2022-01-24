import React from 'react';
import BalanceViewTab from 'components/BalanceViewTab';
import BalanceViewMob from 'components/BalanceViewMob';
import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './BalanceView.module.css';

const BalanceView = () => {
  const viewPort = useWindowDimensions();

  return (
    <section className={s.section + s.themaGray}>
      {viewPort.width < 768 && <BalanceViewMob />}
      {viewPort.width >= 768 && <BalanceViewTab />}
    </section>
  );
};

export default BalanceView;
