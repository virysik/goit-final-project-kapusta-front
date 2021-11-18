import s from './ExpensesIncome.module.css';
import SumCategoryInfo from 'components/SumCategoryInfo';

import { useSelector } from 'react-redux';
import { transactionsSelectors } from 'redux/transactions';

export default function ExpensesIncome() {
  const expenses = useSelector(transactionsSelectors.getExpReportMonthly);
  const incomes = useSelector(transactionsSelectors.getIncReportMonthly);

  return (
    <div className={s.wrapper}>
      <section className={s.section}>
        <div className={s.divExp}>
          <p className={s.desc}> Расходы:</p>
          <span className={s.expenses}>{`-${expenses} грн`}</span>
        </div>

        <div className={s.divInc}>
          <p className={s.desc}>Доходы:</p>
          <span className={s.incomes}>{`+${incomes} грн`}</span>
        </div>
      </section>

      <SumCategoryInfo />
    </div>
  );
}
