import React, { useEffect, useMemo } from 'react';
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

const MobileTable = () => {
  const dispatch = useDispatch();
  const date = useSelector(transactionsSelectors.getDate);
  const isDeleting = useSelector(transactionsSelectors.getIsDeleting);
  const outTrans = useSelector(transactionsSelectors.getOutTrans);
  const incTrans = useSelector(transactionsSelectors.getIncTrans);

  const arr = useMemo(() => {
    return [...outTrans, ...incTrans];
  }, [outTrans, incTrans]);

  // const arrOut = useMemo(() => {
  //   if (outTrans) {
  //     return [...outTrans];
  //   }
  // }, [outTrans]);

  // const arrInc = useMemo(() => {
  //   if (incTrans) {
  //     return [...incTrans];
  //   }
  // }, [incTrans]);

  // const arr = useMemo(() => {
  //   if (arrOut && arrInc) {
  //     return [...arrInc, ...arrOut];
  //   }
  // }, [arrInc, arrOut]);

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
          {arr.map(item => (
            <li key={item._id} className={s.tableItem}>
              <div className={s.boxDescription}>
                <p className={s.description} data-tip={item.description}>
                  {cliTruncate(item.description, 6)}
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
                    {item.day + '.' + item.month + '.' + item.year}
                  </span>
                  <span className={s.category}>{item.category}</span>
                </div>
              </div>
              <div
                className={
                  item.typeOftransactions ? s.boxAmountGreen : s.boxAmount
                }
              >
                <span>
                  {!item.typeOftransactions && `-`}
                  {item.amount}
                </span>
                <button
                  className={s.delBtn}
                  type="button"
                  onClick={() => {
                    dispatch(
                      transactionsOperations.deleteTransaction(item._id),
                    );
                  }}
                  disabled={isDeleting}
                  aria-label="delete"
                >
                  <RiDeleteBin6Line className={s.delIcon} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MobileTable;
