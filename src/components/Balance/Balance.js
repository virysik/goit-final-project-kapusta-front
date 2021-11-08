import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './Balance.module.css';
import { getTotalBalance } from 'redux/transactions/transactions-selectors';
import transactionOp from 'redux/transactions/transactions-operations';

import Notification from '../Notification/Notification';

const Balance = ({ hide, width }) => {
  const balance = useSelector(getTotalBalance);
  const dispatch = useDispatch();
  const [sum, setSum] = useState('');
  const [setPromptClose, setClosePrompt] = useState(true);
  const toggleWindow = () => {
    setClosePrompt(setClosePrompt => !setClosePrompt);
  };

  const onHandleChange = e => setSum(e.currentTarget.value);
  useEffect(() => {
    setSum(balance);
  }, [balance]);

  const onhandleSubmit = e => {
    e.preventDefault();
    dispatch(transactionOp.setBalance(sum));
  };
  return (
    <form onSubmit={onhandleSubmit} className={s.reportBalance}>
      <label htmlFor="balans" className={s.balanceLabel}>
        Баланс:
        <div className={s.buttonsGroup}>
          {balance === 0 ? (
            <>
              {setPromptClose && <Notification onClose={toggleWindow} />}
              <input
                type="text"
                name="name"
                maxLength="10"
                placeholder="00.00"
                onChange={onHandleChange}
                className={ width ? `${s.balanceInputReport} ${s.balanceInput}` : `${s.balanceInput}`}
                autoComplete="off"
              />
              <button className={width ? `${s.balanceInputReport} ${s.balanceButton}` : `${s.balanceButton} `} type="submit">
                ПОДТВЕРДИТЬ
              </button>
            </>
          ) : (
            <>
              <p className={ width ? `${s.balanceInput} ${s.balanceInputReport}` : `${s.balanceInput}`}>
                {`${balance.toLocaleString('ru')}.00`} UAH
              </p>
              <button className={`${s.balanceButton} ${hide}`} disabled>
                ПОДТВЕРДИТЬ
              </button>
            </>
          )}
        </div>
      </label>
    </form>
  );
};
export default Balance;