import s from './MobileTable.module.css';
import ReactTooltip from 'react-tooltip';
import cliTruncate from 'cli-truncate';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDeleteTransactionMutation } from '../../../services/rtk-transactions';

export default function MobileTableItem({ item, onLoading, onDelete }) {
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
            onDelete(item._id);
          }}
          disabled={onLoading}
          aria-label="delete"
        >
          <RiDeleteBin6Line className={s.delIcon} />
        </button>
      </div>
    </li>
  );
}
