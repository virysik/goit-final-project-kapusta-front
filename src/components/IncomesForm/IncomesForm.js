import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { calendarSelectors } from '../../redux/extraInfo';
import {
  useAddOutTransactionMutation,
  useAddIncTransactionMutation,
} from '../../services/rtk-transactions';
import { useState } from 'react';
import s from './IncomesForm.module.css';
import { expensesOpt, incomesOpt } from '../../data/selectOptions';

export default function IncomesForm({ onHandleClick, type }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const day = useSelector(calendarSelectors.getDay);
  const month = useSelector(calendarSelectors.getMonth);
  const year = useSelector(calendarSelectors.getYear);
  const [showLabel, setShowlabel] = useState(false);
  const [categ, setCateg] = useState('');
  const [addOutTransaction] = useAddOutTransactionMutation();
  const [addIncTransaction] = useAddIncTransactionMutation();
  const data = type === 'incomes' ? incomesOpt : expensesOpt;
  const categoryLabel =
    type === 'incomes' ? 'Категория дохода' : 'Категория товара';
  const desc = type === 'incomes' ? 'Описание дохода' : 'Описание товара';
  const emptyLabel = '';

  const handleChange = event => {
    setCateg(event.target.value);
  };

  const handleClick = e => {
    setCategory(e.target.dataset.value);
    setShowlabel(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newOperation = { category, description, amount, day, month, year };

    type === 'incomes'
      ? addIncTransaction(newOperation)
      : addOutTransaction(newOperation);
    onHandleClick();
  };

  const handleBtnClear = e => {
    setAmount('');
    setDescription('');
    setCateg('');
    setShowlabel(false);
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

      <Box sx={{ minWidth: 120 }} className={s.box}>
        <FormControl fullWidth className={s.form}>
          <InputLabel className={s.dropdownInput} id="demo-simple-select-label">
            {showLabel ? emptyLabel : categoryLabel}
          </InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categ}
            label="Category"
            onChange={handleChange}
          >
            {data.map(el => (
              <MenuItem value={el} onClick={handleClick} key={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div className={s.inputWrapper}>
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
      </div>
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
