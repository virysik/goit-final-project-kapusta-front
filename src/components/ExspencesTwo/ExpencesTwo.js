import s from './ExpencesTwo.module.css';

export default function ExpencesTwo({ onHandleClickLeft, onHandleClickRight }) {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.btnL}></button>
      <span className={s.reportMonthTitle}>Расходы</span>
      <button type="button" className={s.btnR}></button>
    </div>
  );
}
