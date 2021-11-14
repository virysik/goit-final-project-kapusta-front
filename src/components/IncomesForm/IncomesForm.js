import BasicSelect from 'components/BasicSelect';
import {
  transactionsSelectors,
  transactionsOperations,
} from 'redux/transactions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './IncomesForm.module.css';

export default function IncomesForm({ onHandleClick, type }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const dispatch = useDispatch();

  const desc = type === 'incomes' ? 'Описание дохода' : 'Описание товара';
  const onSelect = option => {
    setCategory(option);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(description, category, amount, type);
    const newOperation = {
      typeOfTransaction: type,
      category,
      description,
      amount,
      day,
      month,
      year,
    };

    dispatch(transactionsOperations.addOutgoingTransaction(newOperation));
    onHandleClick();
    setAmount('');
    setDescription('');
  };

  const handleBtnClear = e => {
    setAmount('');
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'product':
        return setDescription(value);

      case 'price':
        return setAmount(value);

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
