import s from './ExpensesIncome.module.css';
import SumCategoryInfo from 'components/SumCategoryInfo';

export default function ExpensesIncome() {
  const totalExpences = 0;
  const totalIncomes = 0;

  let type = 'expenses';

  return (
    <div className={s.wrapper}>
      <section className={s.section}>
        <div className={s.divExp}>
          <p className={s.desc}> Расходы:</p>
          <span className={s.expenses}>-18 000. 00 грн</span>
        </div>

        <div className={s.divInc}>
          <p className={s.desc}>Доходы:</p>
          <span className={s.incomes}>+25 000. 00 грн</span>
        </div>
      </section>

      <SumCategoryInfo />
    </div>
    //       >{`+ ${totalIncomes}.00 грн.`}</span>
  );
}
