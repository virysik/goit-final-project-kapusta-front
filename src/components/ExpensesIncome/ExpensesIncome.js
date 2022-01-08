import s from './ExpensesIncome.module.css';
import SumCategoryInfo from 'components/SumCategoryInfo';
import { useSelector } from 'react-redux';
import { calendarSelectors } from '../../redux/extraInfo';
import { useDetailInfoQuery } from '../../services/rtk-transactions';

export default function ExpensesIncome() {
  const month = useSelector(calendarSelectors.getMonth);
  const year = useSelector(calendarSelectors.getYear);
  const { data } = useDetailInfoQuery({ year, month });
  const expenses = data?.data.total[1].sum;
  const incomes = data?.data.total[0].sum;

  return (
    <div className={s.wrapper}>
      <section className={s.section}>
        <div className={s.divExp}>
          <p className={s.desc}> Расходы:</p>
          <span className={s.expenses}>
            {expenses === 0 ? `${expenses} грн` : `-${expenses} грн`}
          </span>
        </div>

        <div className={s.divInc}>
          <p className={s.desc}>Доходы:</p>
          <span className={s.incomes}>
            {incomes === 0 ? `${incomes} грн` : `+${incomes} грн`}
          </span>
        </div>
      </section>

      <SumCategoryInfo />
    </div>
  );
}
