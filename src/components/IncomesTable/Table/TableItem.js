import { useState } from 'react';
import cliTruncate from 'cli-truncate';
import ReactTooltip from 'react-tooltip';
import s from './Table.module.css';
import deleteIcon from '../../../images/svg/delete.svg';
import Modal from 'components/Modal';
import { BsPencilFill } from 'react-icons/bs';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

export default function TableItem({ item, onDelete, onChange }) {
  const [showDelModal, setShowDelModal] = useState(false);
  const [idItem, setIdItem] = useState(null);
  const [open, setOpen] = useState(false);

  function toggle() {
    setShowDelModal(!showDelModal);
  }

  const deleteItem = _id => {
    onDelete(item._id);
    toggle();
  };
  function toggleUpdate() {
    setOpen(!open);
  }

  const handleUpdateClick = _id => {
    onChange(item._id)
    toggleUpdate()
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <tr className={s.tr}>
      <td>{`${item.day}.${item.month}.${item.year}`}</td>
      <td data-tip={item.description}>
        {cliTruncate(item.description, 15)}
        <button
          onClick={() => {
            ReactTooltip.show(this.fooRef);
          }}
        ></button>
        <ReactTooltip />
      </td>

      <td>{item.category}</td>
      <td className={item.typeOftransactions ? s.amountGreen : s.amountRed}>
        {!item.typeOftransactions && `- `}
        {item.amount}
      </td>
      <td>
        <button
          type="button"
          className={s.deleteBtn}
          onClick={() => {
            toggle();
            setIdItem(item._id);
          }}
        >
          <img className={s.icon} src={deleteIcon} alt="Delete icon" />
        </button>
        {showDelModal && (
          <Modal
            modalTitle={'Удалить транзакцию?'}
            handleClickRight={toggle}
            handleClickLeft={() => deleteItem(idItem)}
            onClose={toggle}
          />
        )}
      </td>
      <td>
      <button type="button"
                    className={s.deleteBtn}
                    onClick={() => {
                      toggleUpdate();
                      setIdItem(item._id);
                    }}
                  >
                    <BsPencilFill className={s.Icon} />
                  </button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      {/* <UpdateTrans> */}
                      {/* </UpdateTrans> */}
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>НАЗАД</Button>
                      <Button onClick={() => handleUpdateClick(idItem)}>ВВОД</Button>
                    </DialogActions>
                  </Dialog>
      </td>
    </tr>
  );
}
