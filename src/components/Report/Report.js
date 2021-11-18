import { useDispatch, useSelector } from 'react-redux';
import { transactionsSelectors } from 'redux/transactions';
import {
  goBackOneMonth,
  goForwardOneMonth,
} from 'redux/transactions/transactions-slice';
import months from '../../data/month.json';
import s from './Report.module.css';

const Report = () => {
  const dispatch = useDispatch();

  const month = useSelector(transactionsSelectors.getMonth);
  const year = useSelector(transactionsSelectors.getYear);
  const correctMonth = months.find(el => Number(el.id) === Number(month));

  const onHandleClickLeft = () => {
    dispatch(goBackOneMonth());
  };

  const onHandleClickRight = () => {
    console.log('onHandleClickRight', correctMonth);
    dispatch(goForwardOneMonth());
  };

  return (
    <div className={s.navigationWrapper}>
      <div className={s.reportMonth}>
        <p className={s.title}>Текущий период:</p>
        <div className={s.btnWrapper}>
          <button
            type="button"
            className={s.btnL}
            onClick={onHandleClickLeft}
          ></button>
          <span className={s.reportMonthTitle}>
            {correctMonth.name} {year}
          </span>
          <button
            type="button"
            className={s.btnR}
            onClick={onHandleClickRight}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Report;
