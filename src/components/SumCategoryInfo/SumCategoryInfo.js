import s from "./SumCategoryInfo.module.css";
import CategoryInfo from "../CategoryInfo/CategoryInfo";
import sprite from "../../images/svg/sprite.svg";

const typeTrans = "expenses";

const expenses = [
  { _id: 1, category: "Продукты", value: 0.0 },
  { _id: 2, category: "Алкоголь", value: 0.0 },
  { _id: 3, category: "Развлечения", value: 0.0 },
  { _id: 4, category: "Здоровье", value: 0.0 },
  { _id: 5, category: "Транспорт", value: 0.0 },
  { _id: 6, category: "Всё для дома", value: 0.0 },
  { _id: 8, category: "Коммуналка, связь", value: 0.0 },
  { _id: 7, category: "Техника", value: 0.0 },
  { _id: 9, category: "Спорт, хобби", value: 0.0 },
  { _id: 10, category: "Образование", value: 0.0 },
  { _id: 11, category: "Прочее", value: 0.0 },
];

const incomes = [
  { _id: 12, category: "ЗП", value: 0.0 },
  { _id: 14, category: "Доп. доход", value: 0.0 },
];

export default function SumCategoryInfo() {
  return (
    <div>
      <div className={`${s.container} ${typeTrans}`}>
        <div className={s.amountSection}>
          <svg
            className={s.iconPrevious}
            // onClick={onHandleChangeType}
          >
            <use href={sprite + "#icon-previous"}></use>
          </svg>

          {typeTrans === "expenses" ? (
            <p className={s.title}> Расходы </p>
          ) : (
            <p className={s.title}> Доходы </p>
          )}

          <svg
            className={s.iconNext}
            // onClick={onHandleChangeType}
          >
            <use href={sprite + "#icon-next"}></use>
          </svg>
        </div>

        {typeTrans === "expenses" ? (
          <CategoryInfo
            trans={expenses}
            //   onClick={handleClickExpenses}
          />
        ) : (
          <CategoryInfo
            trans={incomes}
            //   onClick={handleClickIncomes}
          />
        )}
      </div>
    </div>
  );
}
