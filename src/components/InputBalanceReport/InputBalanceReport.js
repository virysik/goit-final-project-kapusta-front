import { useSelector } from 'react-redux';
import { transactionsSelectors } from 'redux/transactions';
import s from './InputBalanceReport.module.css';

export default function InputBalanceReport() {
  const monthlyReport = useSelector(transactionsSelectors.getReportMonthly);

  return (
    <div className={s.wrapper}>
      <p className={s.balans}>Баланс:</p>

      <input
        type="text"
        name="balance"
        maxLength="10"
        placeholder={monthlyReport ? `${monthlyReport} UAH` : `00.00 UAH`}
        className={s.balanceInput}
        autoComplete="off"
        disabled
      />
    </div>
  );
}
