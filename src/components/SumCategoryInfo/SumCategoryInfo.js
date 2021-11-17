import s from './SumCategoryInfo.module.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CategoryInfo from 'components/CategoryInfo';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
transactionsReducer
} from 'redux/transactions';
import {
  transactionsOperations,
  transactionsSelectors,
} from 'redux/transactions';



// const typeTrans = 'expenses';

// const expenses = [
//   { _id: 1, category: 'Продукты', value: 0.0, isActive: false },
//   { _id: 2, category: 'Алкоголь', value: 0.0, isActive: false },
//   { _id: 3, category: 'Развлечения', value: 0.0, isActive: false },
//   { _id: 4, category: 'Здоровье', value: 0.0, isActive: false },
//   { _id: 5, category: 'Транспорт', value: 0.0, isActive: false },
//   { _id: 6, category: 'Всё для дома', value: 0.0, isActive: false },
//   { _id: 8, category: 'Техника', value: 0.0, isActive: false },
//   { _id: 7, category: 'Коммуналка, связь', value: 0.0, isActive: false },
//   { _id: 9, category: 'Спорт, хобби', value: 0.0, isActive: false },
//   { _id: 10, category: 'Образование', value: 0.0, isActive: false },
//   { _id: 11, category: 'Прочее', value: 0.0, isActive: false },
// ];

const incomes = [
  { _id: 12, category: 'ЗП', value: 0.0, isActive: false },
  { _id: 14, category: 'Доп. доход', value: 0.0, isActive: false },
];

export default function SumCategoryInfo() {

  const sumOfcategories = useSelector(transactionsSelectors.getDetailsInfoByExpenses);

  const [state, setState] = useState(false);

  const getUsers = async () => {

    const result = await sumOfcategories;
  
    return setState(result)
  };

  getUsers();

  // console.log(state);

  const expenses = [
  { _id: 1, category: 'Продукты', value: state ? state[0]?.sum : 0, isActive: false },
  // { _id: 2, category: 'Алкоголь', value:  0, isActive: false },
  // { _id: 3, category: 'Развлечения', value: sumOfcategories[2]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
  // { _id: 4, category: 'Здоровье', value: sumOfcategories[3]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
  // { _id: 5, category: 'Транспорт', value: sumOfcategories[4]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
  // { _id: 6, category: 'Всё для дома', value: sumOfcategories[5]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
  // { _id: 8, category: 'Техника', value: sumOfcategories[6]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
  // { _id: 7, category: 'Коммуналка, связь', value: sumOfcategories[7]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
  // { _id: 9, category: 'Спорт, хобби', value: sumOfcategories[8]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
  // { _id: 10, category: 'Образование', value: sumOfcategories[9]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
  // { _id: 11, category: 'Прочее', value: sumOfcategories[10]?.sum ? sumOfcategories[1]?.sum : 0, isActive: false },
];

const dispatch = useDispatch();
const [ typeTrans, setTypeTrans] = useState('expenses')

  function handleClickExpenses () {
    setTypeTrans('expenses')
    dispatch(transactionsReducer.addCurrentType('expenses'));
  };

   function handleClickIncomes () {
     setTypeTrans('incomings');
     dispatch(transactionsReducer.addCurrentType('incomings'));
  };

  return (
    <div className={s.sectionWrapper}>
      <div className={s.wrapper}>
        <button className={s.leftBtn} type="button" onClick={()=> handleClickExpenses()}>
          <MdKeyboardArrowLeft size={20} style={{ color: '#FF751D' }} />
        </button>
        {typeTrans === 'expenses' ? (
          <p className={s.title}> Расходы </p>
        ) : (
          <p className={s.title}> Доходы </p>
        )}
        <button className={s.rightBtn} type="button" onClick={()=> handleClickIncomes()}>
          <MdKeyboardArrowRight size={20} style={{ color: '#FF751D' }} />
        </button>
      </div>

        { typeTrans === 'expenses' ? (
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
