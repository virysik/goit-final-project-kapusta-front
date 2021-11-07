import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [category, setCategory] = React.useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категория товара</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'transport'}>Транспорт</MenuItem>
          <MenuItem value={'products'}>Продукты</MenuItem>
          <MenuItem value={'health'}>Здоровье</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
