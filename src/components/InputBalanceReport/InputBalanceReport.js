import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import s from './InputBalanceReport.module.css';

export default function InputBalanceReport() {
  const getUserBalance = useSelector(authSelectors.getUserBalance);

  return (
    <div className={s.wrapper}>
      <p className={s.balans}>Баланс:</p>

      <input
        type="text"
        name="balance"
        maxLength="10"
        placeholder={getUserBalance ? `${getUserBalance} UAH` : `00.00 UAH`}
        className={s.balanceInput}
        autoComplete="off"
        disabled
      />
    </div>
  );
}
