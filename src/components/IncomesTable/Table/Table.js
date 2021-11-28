import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cliTruncate from 'cli-truncate';
import ReactTooltip from 'react-tooltip';
import {
  transactionsSelectors,
  transactionsOperations,
} from 'redux/transactions';
import { authOperations } from 'redux/auth';
import s from './Table.module.css';
import { useEffect } from 'react';
import deleteIcon from '../../../images/svg/delete.svg';
import DelModal from 'components/ModalDelete';
import Modal from 'components/Modal';


const TableDesktop = ({ type }) => {
  const dispatch = useDispatch();
  const date = useSelector(transactionsSelectors.getDate);
  const expenseTrans = useSelector(transactionsSelectors.getOutTrans);
  const incomeTrans = useSelector(transactionsSelectors.getIncTrans);
  const { showDelModal, toggle } = DelModal();

   useEffect(() => {
    dispatch(transactionsOperations.getIncTransDate(date));
    dispatch(transactionsOperations.getOutTransDate(date));
  }, [date, dispatch]);

  useEffect(() => {
    dispatch(authOperations.getUserBalance());
  }, [dispatch, expenseTrans, incomeTrans]);


  let transactions = [];

  if (!type) {
    transactions = expenseTrans;
  }

  if (type) {
    transactions = incomeTrans;
  }
  const deleteItem = (_id) => {
    dispatch(transactionsOperations.deleteTransaction(_id));
    toggle();
 }

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
          {transactions.map(({_id, day, month, year, description,category,typeOftransactions,amount}) => (
            <tr className={s.tr} key={_id}>
              <td>{`${day}.${month}.${year}`}</td>
              <td data-tip={description}>{cliTruncate(description, 15)}
                <button onClick={() => { ReactTooltip.show(this.fooRef) }}></button>
                <ReactTooltip />
              </td>             
              <td>{category}</td>
              <td
                className={
                  typeOftransactions ? s.amountGreen : s.amountRed
                }
              >
                {!typeOftransactions && `- `}
                {amount}
              </td>
              <td>
                <button
                  type="button"
                  className={s.deleteBtn}
                  onClick={toggle}
                  onClose={toggle}
                >
                  <img className={s.icon} src={deleteIcon} alt="Delete icon" />
                </button>
                {showDelModal && <Modal
                  handleClickLeft={() => deleteItem(_id)}
                  modalTitle={"Удалить транзакцию?"}
                  handleClickRight={toggle}
                  onClose={toggle}
                />
                  }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableDesktop;