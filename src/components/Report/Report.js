import { CurrentMonth } from './CurrentMonth';
import s from './Report.module.css';

const Report = ({ month, year, onHandleClickRight, onHandleClickLeft }) => {
  return (
    <div className={s.navigationWrapper}>
      <CurrentMonth
        currentMonth={month}
        currentYear={year}
        onHandleClickRight={onHandleClickRight}
        onHandleClickLeft={onHandleClickLeft}
      />
    </div>
  );
};

export default Report;
