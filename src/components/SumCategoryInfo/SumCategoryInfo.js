import s from './SumCategoryInfo.module.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CategoryInfo from 'components/CategoryInfo';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsReducer } from 'redux/transactions';
import { transactionsSelectors } from 'redux/transactions';



export default function SumCategoryInfo() {

  const sumOfExpenses = useSelector(
    transactionsSelectors.getDetailsInfoByExpenses,
  );
console.log(sumOfExpenses);
  const sumOfIncomings = useSelector(
    transactionsSelectors.getDetailsInfoByIncomings,
  );

  const [expensesSum, setExpensesSum] = useState([]);
  const [incomingsSum, setIncomingsSum] = useState([]);

  const getState = async () => {

    const result1 = await sumOfExpenses;
    const result2 = await sumOfIncomings;

    return setExpensesSum(result1), setIncomingsSum(result2);
  };

  getState();
  
  const expenses = [
  { _id: 1, category: 'Продукты', value: expensesSum && expensesSum[0] !== undefined ? expensesSum[0]?.sum : 0, isActive: false },
  { _id: 2, category: 'Алкоголь', value:  expensesSum && expensesSum[1] !== undefined ? expensesSum[1]?.sum : 0, isActive: false },
  { _id: 3, category: 'Развлечения', value: expensesSum && expensesSum[2] !== undefined ? expensesSum[2]?.sum : 0, isActive: false },
  { _id: 4, category: 'Здоровье', value: expensesSum && expensesSum[3] !== undefined ? expensesSum[3]?.sum : 0, isActive: false },
  { _id: 5, category: 'Транспорт', value: expensesSum && expensesSum[4] !== undefined ? expensesSum[4]?.sum : 0, isActive: false },
  { _id: 6, category: 'Всё для дома', value: expensesSum && expensesSum[5] !== undefined ? expensesSum[5]?.sum : 0, isActive: false },
  { _id: 8, category: 'Техника', value: expensesSum && expensesSum[6] !== undefined ? expensesSum[6]?.sum : 0, isActive: false },
  { _id: 7, category: 'Коммуналка, связь', value: expensesSum && expensesSum[7] !== undefined ? expensesSum[7]?.sum : 0, isActive: false },
  { _id: 9, category: 'Спорт, хобби', value: expensesSum && expensesSum[8] !== undefined ? expensesSum[8]?.sum : 0, isActive: false },
  { _id: 10, category: 'Образование', value: expensesSum && expensesSum[9] !== undefined ? expensesSum[9]?.sum : 0, isActive: false },
  { _id: 11, category: 'Прочее', value: expensesSum && expensesSum[10] !== undefined ? expensesSum[10]?.sum : 0, isActive: false },
  ];
  
  const incomes = [
  { _id: 12, category: 'ЗП', value: incomingsSum && incomingsSum[0] !== undefined ? incomingsSum[0]?.sum : 0, isActive: false },
  { _id: 14, category: 'Доп. доход', value:  incomingsSum && incomingsSum[1] !== undefined ? incomingsSum[1]?.sum : 0, isActive: false },
];

  const dispatch = useDispatch();
  const [typeTrans, setTypeTrans] = useState('expenses');

  function handleClickExpenses() {
    setTypeTrans('expenses');
    dispatch(transactionsReducer.addCurrentType('expenses'));
  }

  function handleClickIncomes() {
    setTypeTrans('incomings');
    dispatch(transactionsReducer.addCurrentType('incomings'));
  }

  return (
    <div className={s.sectionWrapper}>
      <div className={s.wrapper}>
        <button
          className={s.leftBtn}
          type="button"
          onClick={() => handleClickExpenses()}
        >
          <MdKeyboardArrowLeft size={20} style={{ color: '#FF751D' }} />
        </button>
        {typeTrans === 'expenses' ? (
          <p className={s.title}> Расходы </p>
        ) : (
          <p className={s.title}> Доходы </p>
        )}
        <button
          className={s.rightBtn}
          type="button"
          onClick={() => handleClickIncomes()}
        >
          <MdKeyboardArrowRight size={20} style={{ color: '#FF751D' }} />
        </button>
      </div>
      <>
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
      </>
    </div>
  );
}
