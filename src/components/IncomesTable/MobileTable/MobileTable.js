import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  transactionsOperations,
  transactionsSelectors,
} from 'redux/transactions';
import s from './MobileTable.module.css';
import cliTruncate from 'cli-truncate';
import ReactTooltip from 'react-tooltip';
import { authOperations } from 'redux/auth';
import Modal from 'components/Modal';

const MobileTable = () => {
  const dispatch = useDispatch();
  const date = useSelector(transactionsSelectors.getDate);
  const isDeleting = useSelector(transactionsSelectors.getIsDeleting);
  const outTrans = useSelector(transactionsSelectors.getOutTrans);
  const incTrans = useSelector(transactionsSelectors.getIncTrans);
  const [showDelModal, setShowDelModal] = useState(false);
  const [idItem, setIdItem] = useState(null);

  function toggle() {
    setShowDelModal(!showDelModal);
  }

  const arr = useMemo(() => {
    return [...outTrans, ...incTrans];
  }, [outTrans, incTrans]);

  const deleteItem = _id => {
    dispatch(transactionsOperations.deleteTransaction(_id));
    toggle();
  };

  useEffect(() => {
    dispatch(transactionsOperations.getOutTransDate(date));
    dispatch(transactionsOperations.getIncTransDate(date));
  }, [dispatch, date]);

  useEffect(() => {
    dispatch(authOperations.getUserBalance());
  }, [dispatch, outTrans, incTrans]);

  return (
    <>
      {arr && (
        <ul className={s.listTable}>
          {arr.map(
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
              <li key={_id} className={s.tableItem} id={_id}>
                <div className={s.boxDescription}>
                  <p className={s.description} data-tip={description}>
                    {cliTruncate(description, 6)}
                  </p>
                  <button
                    className={s.btn}
                    onClick={() => {
                      ReactTooltip.show(this.fooRef);
                    }}
                  ></button>
                  <ReactTooltip />
                  <div className={s.boxCategoryAndDate}>
                    <span className={s.itemDate}>
                      {day + '.' + month + '.' + year}
                    </span>
                    <span className={s.category}>{category}</span>
                  </div>
                </div>
                <div
                  className={
                    typeOftransactions ? s.boxAmountGreen : s.boxAmount
                  }
                >
                  <span>
                    {!typeOftransactions && `-`}
                    {amount}
                  </span>
                  <button
                    className={s.delBtn}
                    type="button"
                    onClick={() => {
                      toggle();
                      setIdItem(_id);
                    }}
                    disabled={isDeleting}
                    aria-label="delete"
                  >
                    <RiDeleteBin6Line className={s.delIcon} />
                  </button>
                  {showDelModal && (
                    <Modal
                      modalTitle={'Удалить транзакцию?'}
                      handleClickLeft={() => {
                        deleteItem(idItem);
                      }}
                      handleClickRight={toggle}
                      onClose={toggle}
                    />
                  )}
                </div>
              </li>
            ),
          )}
        </ul>
      )}
    </>
  );
};
export default MobileTable;
