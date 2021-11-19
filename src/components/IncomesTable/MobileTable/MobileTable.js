import React, { useEffect } from 'react';
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
  const allData = useSelector(transactionsSelectors.getAllTrans);
  // const outData = useSelector(transactionsSelectors.getOutTrans);
  // const incData = useSelector(transactionsSelectors.getIncTrans);
  const isDeleting = useSelector(transactionsSelectors.getIsDeleting);

  // console.log('outDATA', outData);
  // console.log('incData', incData);
  console.log('ALLdata', allData);

  // const arr = useMemo(() => {
  //   return [...allData];
  // }, [allData]);
  // const allData = useMemo(() => {
  //   return [outData.concat(incData)];
  // }, [outData, incData]);
  //let allData = [...outData, ...incData];

  useEffect(() => {
    dispatch(transactionsOperations.getOutTransDate(date));
    dispatch(transactionsOperations.getIncTransDate(date));
  }, [dispatch, date]);

  // useEffect(() => {
  //   dispatch(transactionsOperations.getIncTransDate(date));
  // }, [dispatch, date]);

  useEffect(() => {
    dispatch(authOperations.getUserBalance());
  }, [dispatch, allData]);

  return (
    <>
      {allData && (
        <ul className={s.listTable}>
          {allData.map(item => (
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
