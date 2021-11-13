import s from "./ExpensesIncome.module.css";
import SumCategoryInfo from "../SumCategoryInfo/SumCategoryInfo";

export default function ExpensesIncome() {
  const totalExpences = 0;
  const totalIncomes = 0;

  return (
    <section className={s.section}>
      <div className={s.amount}>
        <div className={s.amountExpenses}>
          <h3 className={s.amountTitle}>Расходы:</h3>
          <span
            className={s.amountExpensesSum}
          >{`- ${totalExpences}.00 грн.`}</span>
        </div>

        <div className={s.amountIncome}>
          <h3 className={s.amountTitle}>Доходы:</h3>
          <span
            className={s.amountIncomeSum}
          >{`+ ${totalIncomes}.00 грн.`}</span>
        </div>
      </div>

      <SumCategoryInfo />
    </section>
  );
}
