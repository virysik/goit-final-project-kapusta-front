// import BasicSelect from 'components/BasicSelect';
import {
  transactionsSelectors,
  transactionsOperations,
} from 'redux/transactions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './IncomesForm.module.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import s from './BasicSelect.module.css';
import { expensesOpt, incomesOpt } from '../../data/selectOptions';

export default function IncomesForm({ onHandleClick, type }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const day = useSelector(transactionsSelectors.getDay);
  const month = useSelector(transactionsSelectors.getMonth);
  const year = useSelector(transactionsSelectors.getYear);

  const [categ, setCateg] = React.useState('');

  const data = type === 'incomes' ? incomesOpt : expensesOpt;
  const categoryLabel =
    type === 'incomes' ? 'Категория дохода' : 'Категория товара';

  const handleChange = event => {
    setCateg(event.target.value);
  };

  const handleClick = e => {
    setCategory(e.target.dataset.value);
  };

  const dispatch = useDispatch();

  const desc = type === 'incomes' ? 'Описание дохода' : 'Описание товара';

  // const onSelect = option => {
  //   setCategory(option);
  // };

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
    setCateg('');
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
            {categoryLabel}
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

      {/* <BasicSelect onSelect={onSelect} type={type} /> */}
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
