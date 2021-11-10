import s from './ExpensesIncome.module.css';
import SwitchExpensesIncome from '../SwitchExpensesIncome/SwitchExpensesIncome';

export default function ExpensesIncome() {
  return (
    <section className={s.section}>
      <div className={s.amount}>
        <div className={s.amountExpenses}>
          <h3 className={s.amountTitle}>Расходы:</h3>
          <span className={s.amountExpensesSum}>- 18 000.00 грн.</span>
        </div>

        <div className={s.amountIncome}>
          <h3 className={s.amountTitle}>Доходы:</h3>
          <span className={s.amountIncomeSum}>+ 45 000.00 грн.</span>
        </div>
      </div>

      <SwitchExpensesIncome />
    </section>
  );
}
