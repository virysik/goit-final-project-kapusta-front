import BasicSelect from 'components/BasicSelect';
import {
  transactionsSelectors,
  transactionsOperations,
} from 'redux/transactions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './IncomesForm.module.css';

export default function IncomesForm({ onHandleClick, type }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const day = useSelector(transactionsSelectors.getDay);
  const month = useSelector(transactionsSelectors.getMonth);
  const year = useSelector(transactionsSelectors.getYear);

  const dispatch = useDispatch();

  const desc = type === 'incomes' ? 'Описание дохода' : 'Описание товара';

  const onSelect = option => {
    setCategory(option);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newOperation = { category, description, amount, day, month, year };

    type === 'incomes'
      ? dispatch(transactionsOperations.addIncomingTransaction(newOperation))
      : dispatch(transactionsOperations.addOutgoingTransaction(newOperation));

    onHandleClick();
  };

  const handleBtnClear = e => {
    setAmount('');
    setDescription('');
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'product':
        return setDescription(value);

      case 'price':
        return setAmount(Number(value));

      default:
        throw new Error(`there is no such name as ${name}`);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="product"
        onChange={handleInputChange}
        value={description}
        className={s.inputDescribe}
        placeholder={desc}
        autoFocus="off"
      />
      <BasicSelect onSelect={onSelect} type={type} />

      <input
        type="number"
        className={s.priceInput}
        name="price"
        onWheelCapture={e => {
          e.target.blur();
        }}
        onChange={handleInputChange}
        value={amount}
        placeholder="00.00 UAH"
        autoFocus="off"
      />

      <div className={s.btnWrapper}>
        <button type="submit" className={s.btn}>
          Ввод
        </button>
        <button type="button" className={s.btn} onClick={handleBtnClear}>
          Очистить
        </button>
      </div>
    </form>
  );
}
