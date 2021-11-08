import s from './ConfirmButtonBalance.module.css';

const ConfirmButtonBalance = ({ onSubmit }) => (
  <button className={s.confirmButton} onClick={onSubmit}>ПОДТВЕРДИТЬ</button>
);


export default ConfirmButtonBalance;