import { useDispatch, useSelector } from 'react-redux';
import {
  goBackOneMonth,
  goForwardOneMonth,
} from 'redux/extraInfo/extraInfo-slice';
import { calendarSelectors } from '../../redux/extraInfo';
import months from '../../data/month.json';
import s from './Report.module.css';

const Report = () => {
  const dispatch = useDispatch();

  const month = useSelector(calendarSelectors.getMonth);
  const year = useSelector(calendarSelectors.getYear);

  const correctMonth = months.find(el => Number(el.id) === Number(month));

  const onHandleClickLeft = () => {
    dispatch(goBackOneMonth());
  };

  const onHandleClickRight = () => {
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
