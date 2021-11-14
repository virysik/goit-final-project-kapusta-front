import s from './SumCategoryInfo.module.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CategoryInfo from 'components/CategoryInfo';

const typeTrans = 'expenses';

const expenses = [
  { _id: 1, category: 'Продукты', value: 0.0, isActive: false },
  { _id: 2, category: 'Алкоголь', value: 0.0, isActive: false },
  { _id: 3, category: 'Развлечения', value: 0.0, isActive: false },
  { _id: 4, category: 'Здоровье', value: 0.0, isActive: false },
  { _id: 5, category: 'Транспорт', value: 0.0, isActive: false },
  { _id: 6, category: 'Всё для дома', value: 0.0, isActive: false },
  { _id: 8, category: 'Техника', value: 0.0, isActive: false },
  { _id: 7, category: 'Коммуналка, связь', value: 0.0, isActive: false },
  { _id: 9, category: 'Спорт, хобби', value: 0.0, isActive: false },
  { _id: 10, category: 'Образование', value: 0.0, isActive: false },
  { _id: 11, category: 'Прочее', value: 0.0, isActive: false },
];

const incomes = [
  { _id: 12, category: 'ЗП', value: 0.0, isActive: false },
  { _id: 14, category: 'Доп. доход', value: 0.0, isActive: false },
];

export default function SumCategoryInfo() {
  return (
    <div className={s.sectionWrapper}>
      <div className={s.wrapper}>
        <button className={s.leftBtn} type="button">
          <MdKeyboardArrowLeft size={20} style={{ color: '#FF751D' }} />
        </button>
        {typeTrans === 'expenses' ? (
          <p className={s.title}> Расходы </p>
        ) : (
          <p className={s.title}> Доходы </p>
        )}
        <button className={s.rightBtn} type="button">
          <MdKeyboardArrowRight size={20} style={{ color: '#FF751D' }} />
        </button>
      </div>

      {typeTrans === 'expenses' ? (
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
  );
}
