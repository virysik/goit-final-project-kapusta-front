import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cliTruncate from 'cli-truncate';
import ReactTooltip from 'react-tooltip';
// import {
//   transactionsSelectors,
//   transactionsOperations,
// } from 'redux/transactions';
import {
  useGetSummaryOutQuery,
  useGetSummaryIncQuery,
  useIncTransDateQuery,
  useOutTransDateQuery,
  useDeleteTransactionMutation,
} from '../../../services/rtk-transactions';
import { authOperations } from 'redux/auth';
import s from './Table.module.css';
import { useEffect } from 'react';
import deleteIcon from '../../../images/svg/delete.svg';

const TableDesktop = ({ type }) => {
  const dispatch = useDispatch();
  // const date = useSelector(transactionsSelectors.getDate);
  const date = { year: '2021', month: '12', day: '26' };
  // const expenseTrans = useSelector(transactionsSelectors.getOutTrans);
  // const incomeTrans = useSelector(transactionsSelectors.getIncTrans);

  const { data: inc } = useIncTransDateQuery(date);
  const incomeTrans = inc?.data;
  const { data: out } = useOutTransDateQuery(date);
  const expenseTrans = out?.data;

  const [deleteTransaction] = useDeleteTransactionMutation();

  // useEffect(() => {
  //   dispatch(transactionsOperations.getIncTransDate(date));
  //   dispatch(transactionsOperations.getOutTransDate(date));
  // }, [date]);

  //   useEffect(() => {
  //   dispatch(transactionsOperations.getIncTransDate(date));
  //   }, [incomeTrans.length]);

  //   useEffect(() => {
  //   dispatch(transactionsOperations.getOutTransDate(date));
  // }, [expenseTrans.length]);

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
              <tr className={s.tr} key={item._id}>
                <td>{`${item.day}.${item.month}.${item.year}`}</td>
                <td data-tip={item.description}>
                  {cliTruncate(item.description, 15)}
                  <button
                    onClick={() => {
                      ReactTooltip.show(this.fooRef);
                    }}
                  ></button>
                  <ReactTooltip />
                </td>

                <td>{item.category}</td>
                <td
                  className={
                    item.typeOftransactions ? s.amountGreen : s.amountRed
                  }
                >
                  {!item.typeOftransactions && `- `}
                  {item.amount}
                </td>
                <td>
                  <button
                    type="button"
                    className={s.deleteBtn}
                    onClick={() => deleteTransaction}
                  >
                    <img
                      className={s.icon}
                      src={deleteIcon}
                      alt="Delete icon"
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDesktop;
