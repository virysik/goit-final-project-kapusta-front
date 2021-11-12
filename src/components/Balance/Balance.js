import React from 'react';
import { useState } from 'react';
import s from './Balance.module.css';
import GoToReports from 'components/GoToReports';
import Notification from 'components/Notification';

const Balance = () => {
  const balanceState = 12;
  const [balance, setBalance] = useState('');

  const handleInputChange = e => {
    setBalance(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!balance || Number(balance) === 0) {
      alert('Внесите пожалуста сумму в баланс больше нуля');
    }
    console.log(e.target.value);
    console.log(balance);
    setBalance('');
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
            value={balance}
            onChange={handleInputChange}
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
      {balanceState === 0 && <Notification />}
    </div>
  );
};
export default Balance;
