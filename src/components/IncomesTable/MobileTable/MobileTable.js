import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calendarSelectors } from '../../../redux/calendar';
import s from './MobileTable.module.css';
import { authOperations } from 'redux/auth';
import {
  useIncTransDateQuery,
  useOutTransDateQuery,
  useDeleteTransactionMutation,
} from '../../../services/rtk-transactions';
import MobileTableItem from './MobileTableItem';

const MobileTable = () => {
  const dispatch = useDispatch();
  const date = useSelector(calendarSelectors.getDate);

  const { data: out } = useOutTransDateQuery(date);
  const outTrans = out?.data;
  const { data: inc } = useIncTransDateQuery(date);
  const incTrans = inc?.data;

  const [deleteTransaction, { isLoading }] = useDeleteTransactionMutation();

  useEffect(() => {
    dispatch(authOperations.getUserBalance());
  }, [dispatch, outTrans, incTrans]);

  return (
    <>
      {outTrans && incTrans && (
        <ul className={s.listTable}>
          {[...outTrans, ...incTrans].map(item => (
            <MobileTableItem
              key={item._id}
              item={item}
              onDelete={deleteTransaction}
              isLoading={isLoading}
            />
          ))}
        </ul>
      )}
    </>
  );
};
export default MobileTable;
