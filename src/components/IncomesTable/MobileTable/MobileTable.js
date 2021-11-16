import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  transactionsOperations,
  transactionsSelectors,
} from 'redux/transactions';
import items from '../Table/data.json';
import s from './MobileTable.module.css';
import cliTruncate from 'cli-truncate';
import ReactTooltip from 'react-tooltip';

const MobileTable = () => {
  const dispatch = useDispatch();
  const day = useSelector(transactionsSelectors.getDay);
  const month = useSelector(transactionsSelectors.getMonth);
  const year = useSelector(transactionsSelectors.getYear);
  const outData = useSelector(transactionsSelectors.getOutTrans);
  const incData = useSelector(transactionsSelectors.getIncTrans);
  // const allData = useSelector(transactionsSelectors.getAllTrans);
  // console.log(all);
  const allData = [...outData, ...incData];
  const isDeleting = useSelector(transactionsSelectors.getIsDeleting);
  const [isDel, setIsDel] = useState(isDeleting);

  console.log('day', day);

  console.log('month', month);

  console.log('year', year);

  console.log('allData', allData);
  useEffect(() => {
    dispatch(
      transactionsOperations.getOutTransDate({
        day,
        month,
        year,
      }),
    );
  }, [day, month, year]);

  useEffect(() => {
    dispatch(
      transactionsOperations.getIncTransDate({
        day,
        month,
        year,
      }),
    );
  }, [day, month, year]);

  let type = 'expenses';

  const onDelete = id => {
    dispatch(transactionsOperations.deleteTransaction(id));
    setIsDel(true);
  };
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
                    {item.day + item.month + item.year}
                    {/* {new Date(item.date).toLocaleString().slice(0, 10)} */}
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
                  onClick={() => onDelete(item._id)}
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
