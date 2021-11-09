import s from './InputBalanceReport.module.css';

export default function InputBalanceReport() {
  return (
    <div className={s.wrapper}>
      <p className={s.balans}>Баланс:</p>
      <span className={s.money}>
        55 000.00<span className={s.valute}>UAH</span>
      </span>
    </div>
  );
}
