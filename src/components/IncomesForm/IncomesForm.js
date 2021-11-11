import BasicSelect from 'components/BasicSelect';
import s from './IncomesForm.module.css';

export default function IncomesForm({ onHandleClick }) {
  const handleSubmit = e => {
    e.preventDefault();
    onHandleClick();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="product"
        className={s.inputDescribe}
        placeholder="Описание товара"
        autoFocus="off"
      />
      <BasicSelect />

      <input
        type="number"
        className={s.priceInput}
        name="price"
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
