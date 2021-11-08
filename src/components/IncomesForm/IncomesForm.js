import BasicSelect from 'components/BasicSelect';

export default function IncomesForm() {
  return (
    <form>
      <input
        type="text"
        name="product"
        placeholder="Описание товара"
        autoFocus="off"
      />
      <BasicSelect />
      <input type="number" name="price" autoFocus="off" />
      <button type="submit">Ввод</button>
      <button type="button">Очистить</button>
    </form>
  );
}
