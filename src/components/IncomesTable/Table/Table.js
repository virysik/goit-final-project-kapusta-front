import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cliTruncate from 'cli-truncate';
import ReactTooltip from 'react-tooltip';
import {BsPencilFill} from 'react-icons/bs';
import {
  transactionsSelectors,
  transactionsOperations,
} from 'redux/transactions';
import { authOperations } from 'redux/auth';
import s from './Table.module.css';
import style from '../MobileTable/MobileTable.module.css';
import { useEffect } from 'react';
import deleteIcon from '../../../images/svg/delete.svg';
import Modal from 'components/Modal';
import IncomesForm from 'components/IncomesForm';

const TableDesktop = ({ type }) => {
  const dispatch = useDispatch();
  const date = useSelector(transactionsSelectors.getDate);
  const expenseTrans = useSelector(transactionsSelectors.getOutTrans);
  const incomeTrans = useSelector(transactionsSelectors.getIncTrans);
  const [showDelModal, setShowDelModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [idItem, setIdItem] = useState(null);


  function toggle() {
    setShowDelModal(!showDelModal);
  }

  const deleteItem = _id => {
    dispatch(transactionsOperations.deleteTransaction(_id));
    toggle();
  };

  function toggleUpdate() {
    setModalUpdate(!modalUpdate);
  }

  const handleUpdateClick = _id => {
    dispatch(transactionsOperations.updateTransaction(_id))
    toggleUpdate()
  }

  useEffect(() => {
    dispatch(transactionsOperations.getIncTransDate(date));
    dispatch(transactionsOperations.getOutTransDate(date));
  }, [dispatch, date]);

  // useEffect(() => {
  //   dispatch(transactionsOperations.getIncTransDate(date));
  // }, [incomeTrans.length]);

  // useEffect(() => {
  //   dispatch(transactionsOperations.getOutTransDate(date));
  // }, [expenseTrans.length]);

  useEffect(() => {
    dispatch(authOperations.getUserBalance());
  }, [dispatch, expenseTrans, incomeTrans]);

  let transactions = [];

  let expTrans = useMemo(() => {
    return [...expenseTrans];
  }, [expenseTrans]);

  let incTrans = useMemo(() => {
    return [...incomeTrans];
  }, [incomeTrans]);

  transactions = !type ? expTrans : incTrans;

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
          {transactions.map(
            ({
              _id,
              day,
              month,
              year,
              description,
              category,
              typeOftransactions,
              amount,
            }) => (
              <tr className={s.tr} key={_id}>
                <td>{`${day}.${month}.${year}`}</td>
                <td data-tip={description}>
                  {cliTruncate(description, 15)}

                  <button
                    onClick={() => {
                      ReactTooltip.show(this.fooRef);
                    }}
                  ></button>
                  <ReactTooltip />
                </td>

                <td>{category}</td>

                <td
                  className={typeOftransactions ? s.amountGreen : s.amountRed}
                >
                  {!typeOftransactions && `- `}
                  {amount}
                </td>
                <td>
                  <button
                    type="button"
                    className={s.deleteBtn}
                    onClick={() => {
                      toggle();
                      setIdItem(_id);
                    }}
                  >
                    <img
                      className={s.icon}
                      src={deleteIcon}
                      alt="Delete icon"
                    />
                  </button>
                  <button type="button"
                    className={s.deleteBtn}
                    onClick={() => {
                      toggleUpdate();
                      setIdItem(_id);
                    }}>
                    <BsPencilFill className={style.delIcon} />
                  </button>
                  {showDelModal &&(
                    <Modal
                      modalTitle={'Удалить транзакцию?'}
                      handleClickRight={toggle}
                      handleClickLeft={() => deleteItem(idItem)}
                      onClose={toggle}
                    />
                  )}
                  {modalUpdate &&(
                    <IncomesForm                                     
                      handleClickRight={toggleUpdate}
                      handleClickLeft={() => handleUpdateClick(idItem)}
                      onClose={toggleUpdate}
                    
                    />
                  )}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDesktop;