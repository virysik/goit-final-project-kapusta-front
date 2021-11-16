import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'components/Container';
import BalanceViewTab from 'components/BalanceViewTab';
import BalanceViewMob from 'components/BalanceViewMob';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { authOperations } from 'redux/auth';
import s from './BalanceView.module.css';
import { Toaster } from 'react-hot-toast';

const BalanceView = () => {
  const viewPort = useWindowDimensions();
  let type = 'expenses';
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.getUserBalance());
  // }, []);

  return (
    <section className={s.section}>
      {viewPort.width < 768 && <BalanceViewMob type={type} />}
      {viewPort.width >= 768 && <BalanceViewTab type={type} />}

      <Toaster />
    </section>
  );
};

export default BalanceView;
