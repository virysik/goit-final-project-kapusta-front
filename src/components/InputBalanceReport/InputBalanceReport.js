import s from './InputBalanceReport.module.css';

export default function InputBalanceReport() {
  return (
    <div className={s.wrapper}>
      <p className={s.balans}>Баланс:</p>

      <input
        type="text"
        name="balance"
        maxLength="10"
        placeholder="55 000.00 UAH"
        className={s.balanceInput}
        autoComplete="off"
        disabled
      />
    </div>
  );
}
