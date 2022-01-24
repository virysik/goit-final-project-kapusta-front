import s from './Balance.module.css';
import toast from 'react-hot-toast';
import GoToReports from 'components/GoToReports';
import Notification from 'components/Notification';
import { authSelectors, authOperations } from 'redux/auth';
import { useSelector, useDispatch } from 'react-redux';

export default function Balance() {
  const getUserBalance = useSelector(authSelectors.getUserBalance);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    let balance = e.target.elements.balance.value;

    if (!balance || Number(balance) === 0) {
      return toast.error('Внесите пожалуйста сумму на баланс больше нуля');
    }

    const newBalance = Number(balance);
    dispatch(authOperations.setUserBalance({ balance: newBalance }));
    e.target.elements.balance.value = '';
  };

  return (
    <div className={s.containerBalance}>
      <GoToReports />
      <form className={s.formBalance} onSubmit={handleSubmit}>
        <p className={s.balanceLabel}>Баланс:</p>
        <div className={s.balanceAndBtn}>
          <input
            type="text"
            name="balance"
            maxLength="10"
            placeholder={getUserBalance ? `${getUserBalance} UAH` : `00.00 UAH`}
            className={s.balanceInput}
            autoComplete="off"
          />
          <button type="submit" className={s.confirmButton}>
            ПОДТВЕРДИТЬ
          </button>
        </div>
      </form>
      {Number(getUserBalance) === 0 && <Notification />}
    </div>
  );
}
