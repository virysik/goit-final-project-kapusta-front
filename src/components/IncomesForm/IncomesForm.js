import BasicSelect from 'components/BasicSelect';
import { useState } from 'react';
import s from './IncomesForm.module.css';

export default function IncomesForm({ onHandleClick, type }) {
  const [product, setProduct] = useState('');
  const [option, setOption] = useState('');
  const [price, setPrice] = useState('');

  const description =
    type === 'incomes' ? 'Описание дохода' : 'Описание товара';
  const onSelect = option => {
    setOption(option);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(product, option, price);
    onHandleClick();
    setPrice('');
    setProduct('');
  };
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'product':
        return setProduct(value);

      case 'price':
        return setPrice(value);

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
        value={product}
        className={s.inputDescribe}
        placeholder={description}
        autoFocus="off"
      />
      <BasicSelect onSelect={onSelect} type={type} />

      <input
        type="number"
        className={s.priceInput}
        name="price"
        onChange={handleInputChange}
        value={price}
        placeholder="00.00 UAH"
        autoFocus="off"
      />

      <div className={s.btnWrapper}>
        <button type="submit" className={s.btn}>
          Ввод
        </button>
        <button type="button" className={s.btn}>
          Очистить
        </button>
      </div>
    </form>
  );
}
