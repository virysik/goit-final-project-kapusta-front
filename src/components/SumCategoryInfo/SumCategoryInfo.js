import s from './SumCategoryInfo.module.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CategoryInfo from 'components/CategoryInfo';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsReducer } from 'redux/transactions';
import {
  transactionsOperations,
  transactionsSelectors,
} from 'redux/transactions';

const incomes = [
  { _id: 12, category: 'ЗП', value: 0.0, isActive: false },
  { _id: 14, category: 'Доп. доход', value: 0.0, isActive: false },
];

export default function SumCategoryInfo() {
  const sumOfcategories = useSelector(
    transactionsSelectors.getDetailsInfoByExpenses,
  );

  const [state, setState] = useState([]);

  const getUsers = async () => {
    const result = await sumOfcategories;

    return setState(result);
  };

  getUsers();
  const expenses = [
    {
      _id: 1,
      category: 'Продукты',
      value: state && state[0] !== undefined ? state[0]?.sum : 1,
      isActive: false,
    },
    {
      _id: 2,
      category: 'Алкоголь',
      value: state && state[1] !== undefined ? state[1]?.sum : 0,
      isActive: false,
    },
    {
      _id: 3,
      category: 'Развлечения',
      value: state && state[2] !== undefined ? state[2]?.sum : 0,
      isActive: false,
    },
    {
      _id: 4,
      category: 'Здоровье',
      value: state && state[3] !== undefined ? state[3]?.sum : 0,
      isActive: false,
    },
    {
      _id: 5,
      category: 'Транспорт',
      value: state && state[4] !== undefined ? state[4]?.sum : 0,
      isActive: false,
    },
    {
      _id: 6,
      category: 'Всё для дома',
      value: state && state[5] !== undefined ? state[5]?.sum : 0,
      isActive: false,
    },
    {
      _id: 8,
      category: 'Техника',
      value: state && state[6] !== undefined ? state[6]?.sum : 0,
      isActive: false,
    },
    {
      _id: 7,
      category: 'Коммуналка, связь',
      value: state && state[7] !== undefined ? state[7]?.sum : 0,
      isActive: false,
    },
    {
      _id: 9,
      category: 'Спорт, хобби',
      value: state && state[8] !== undefined ? state[8]?.sum : 0,
      isActive: false,
    },
    {
      _id: 10,
      category: 'Образование',
      value: state && state[9] !== undefined ? state[9]?.sum : 0,
      isActive: false,
    },
    {
      _id: 11,
      category: 'Прочее',
      value: state && state[10] !== undefined ? state[10]?.sum : 0,
      isActive: false,
    },
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
