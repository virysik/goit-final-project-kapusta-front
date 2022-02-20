import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableItem from './TableItem';
import {
  useIncTransDateQuery,
  useOutTransDateQuery,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
} from '../../../services/rtk-transactions';
import { authOperations } from 'redux/auth';
import s from './Table.module.css';
import { useEffect } from 'react';
import { calendarSelectors } from '../../../redux/extraInfo';

const TableDesktop = ({ type }) => {
  const dispatch = useDispatch();
  const date = useSelector(calendarSelectors.getDate);

  const { data: inc } = useIncTransDateQuery(date);
  const incomeTrans = inc?.data;
  const { data: out } = useOutTransDateQuery(date);
  const expenseTrans = out?.data;

  const [deleteTransaction] = useDeleteTransactionMutation();
  const [updateTransaction] = useUpdateTransactionMutation();

  useEffect(() => {
    dispatch(authOperations.getUserBalance());
  }, [dispatch, expenseTrans, incomeTrans]);

  let transactions = [];

  type ? (transactions = incomeTrans) : (transactions = expenseTrans);

  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead className={s.headerTable}>
          <tr className={s.tableTh}>
            <th className={s.tableTh}>Дата</th>
            <th className={s.tableTh}>Описание</th>
            <th className={s.tableTh}>Категория</th>
            <th className={s.tableTh}>Сумма</th>
            <th className={s.tableTh}></th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map(item => (
              <TableItem
                key={item._id}
                item={item}
                onDelete={deleteTransaction}
                onChange={updateTransaction}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDesktop;
