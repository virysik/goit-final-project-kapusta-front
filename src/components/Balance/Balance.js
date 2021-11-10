import React from 'react';
import s from './Balance.module.css';
import ConfirmButtonBalance from 'components/ConfirmButtonBalance';
import GoToReports from 'components/GoToReports';
import InputBalance from 'components/InputBalance';
import Notification from 'components/Notification';
const Balance = () => {
  return (
    <div className={s.containerBalanse}>
      <GoToReports />
      <div className={s.confirmBalance}>
        <form className={s.formBalance}>
          <label htmlFor="balance" className={s.balanceLabel}>
            Баланс:
            <div className={s.balanceAndBtn}>
              <InputBalance />
              <Notification />
              <ConfirmButtonBalance />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};
export default Balance;
