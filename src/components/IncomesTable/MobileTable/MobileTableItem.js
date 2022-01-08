import { useState } from 'react';
import s from './MobileTable.module.css';
import ReactTooltip from 'react-tooltip';
import cliTruncate from 'cli-truncate';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Modal from 'components/Modal';

export default function MobileTableItem({ item, isLoading, onDelete }) {
  const [showDelModal, setShowDelModal] = useState(false);
  const [idItem, setIdItem] = useState(null);

  function toggle() {
    setShowDelModal(!showDelModal);
  }

  const deleteItem = _id => {
    onDelete(item._id);
    toggle();
  };

  return (
    <li className={s.tableItem}>
      <div className={s.boxDescription}>
        <p className={s.description} data-tip={item.description}>
          {cliTruncate(item.description, 6)}
        </p>
        <button
          className={s.btn}
          onClick={() => {
            ReactTooltip.show(this.fooRef);
          }}
        ></button>
        <ReactTooltip />
        <div className={s.boxCategoryAndDate}>
          <span className={s.itemDate}>
            {item.day + '.' + item.month + '.' + item.year}
          </span>
          <span className={s.category}>{item.category}</span>
        </div>
      </div>
      <div className={item.typeOftransactions ? s.boxAmountGreen : s.boxAmount}>
        <span>
          {!item.typeOftransactions && `-`}
          {item.amount}
        </span>
        <button
          className={s.delBtn}
          type="button"
          onClick={() => {
            toggle();
            setIdItem(item._id);
          }}
          disabled={isLoading}
          aria-label="delete"
        >
          {showDelModal && (
            <Modal
              modalTitle={'Удалить транзакцию?'}
              handleClickRight={toggle}
              handleClickLeft={() => deleteItem(idItem)}
              onClose={toggle}
            />
          )}
          <RiDeleteBin6Line className={s.delIcon} />
        </button>
      </div>
    </li>
  );
}
