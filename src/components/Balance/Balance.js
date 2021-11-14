import s from './Balance.module.css';
import GoToReports from 'components/GoToReports';
import Notification from 'components/Notification';
import { authSelectors, authOperations } from 'redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-team-project.herokuapp.com/api';

const Balance = () => {
  const getUserBalance = useSelector(authSelectors.getUserBalance);
  const dispatch = useDispatch();

  const [balance, setBalance] = useState(getUserBalance);

  const handleInputChange = e => {
    setBalance(Number(e.target.value.slice(0, -4)));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!balance || Number(balance) === 0) {
      // toast.error('Внесите пожалуйста сумму на баланс больше нуля');
      alert('Внесите пожалуйста сумму на баланс больше нуля');
    }
    const newBalance = Number(e.target.elements[0].value.slice(0, -4));
    console.log(e.target.elements[0].value);
    dispatch(authOperations.setUserBalance({ balance: newBalance }));
    setBalance(newBalance);
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
            value={`${Number(balance).toFixed(2)} UAH`}
            // value={balance}
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
      {/* {balanceState === 0 && <Notification />} */}
    </div>
  );
};
export default Balance;
