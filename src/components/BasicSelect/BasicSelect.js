import * as React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from './BasicSelect.module.css';
import { expensesOpt, incomesOpt } from '../../data/selectOptions';

export default function BasicSelect({ type, onSelect }) {
  const [categ, setCateg] = React.useState('');
  const [opt, setOpt] = React.useState('');

  const data = type === 'incomes' ? incomesOpt : expensesOpt;
  const categoryLabel =
    type === 'incomes' ? 'Категория дохода' : 'Категория товара';

  const handleChange = event => {
    setCateg(event.target.value);
  };

  const handleClick = e => {
    setOpt(e.target.dataset.value);
    onSelect(e.target.dataset.value);
  };

  return (
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

          {/* <MenuItem value={10} onClick={handleClick}>
            Ten
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
