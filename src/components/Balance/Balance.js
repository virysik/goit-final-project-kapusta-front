import React from 'react';
import { useState } from 'react';
import s from './Balance.module.css';
import GoToReports from 'components/GoToReports';
import Notification from 'components/Notification';

const Balance = () => {
  const [noBalance, setNoBalance] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    setNoBalance(false);
  };

  return (
    <div className={s.containerBalance}>
      <GoToReports />
      <form className={s.formBalance} onSubmit={handleSubmit}>
        <p className={s.balanceLabel}>Баланс:</p>
        <div className={s.balanceAndBtn}>
          <input
            type="text"
            name="balance"
            maxLength="10"
            placeholder="00.00 UAH"
            className={s.balanceInput}
            autoComplete="off"
          />
          <button type="submit" className={s.confirmButton}>
            ПОДТВЕРДИТЬ
          </button>
        </div>
      </form>
      {noBalance && <Notification />}
    </div>
  );
};
export default Balance;
