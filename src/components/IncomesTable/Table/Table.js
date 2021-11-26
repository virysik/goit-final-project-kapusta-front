import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cliTruncate from 'cli-truncate';
import ReactTooltip from 'react-tooltip';
import {
  transactionsSelectors,
  transactionsOperations,
} from 'redux/transactions';
import { authOperations } from 'redux/auth';
import s from './Table.module.css';
import { useEffect } from 'react';
import deleteIcon from '../../../images/svg/delete.svg';
import DelModal from 'components/ModalDelete';
import Modal from 'components/Modal';


const TableDesktop = ({ type }) => {
  const dispatch = useDispatch();
  const date = useSelector(transactionsSelectors.getDate);
  const expenseTrans = useSelector(transactionsSelectors.getOutTrans);
  const incomeTrans = useSelector(transactionsSelectors.getIncTrans);
  // const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const { showDelModal, toggle } = DelModal();

  // const toggleModal = () => {
  //   setShowModal(prevShowModal => !prevShowModal);
  // };

  // const delModal = () => {
  //   dispatch(transactionsOperations.deleteTransaction());
  //   toggleModal();
  // };

  // const [setModalOpen, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(transactionsOperations.getIncTransDate(date));
    dispatch(transactionsOperations.getOutTransDate(date));
  }, [date, dispatch]);

  useEffect(() => {
    dispatch(authOperations.getUserBalance());
  }, [dispatch, expenseTrans, incomeTrans]);

  let transactions = [];

  if (!type) {
    transactions = expenseTrans;
  }

  if (type) {
    transactions = incomeTrans;
  }

  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead className={s.headerTable}>
          <tr className={s.tableTh}>
            <th className={s.tableTh}>Дата</th>
            <th className={s.tableTh}>Описание</th>
            <th className={s.tableTh}>Категория</th>
            <th className={s.tableTh}>Сумма</th>
            <th className={s.tableTh}></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(item => (
            <tr className={s.tr} key={item._id}>
              <td>{`${item.day}.${item.month}.${item.year}`}</td>
              <td data-tip={item.description}>{cliTruncate(item.description, 15)}
                <button onClick={() => { ReactTooltip.show(this.fooRef) }}></button>
                <ReactTooltip />
              </td>
             
             
              <td>{item.category}</td>
              <td
                className={
                  item.typeOftransactions ? s.amountGreen : s.amountRed
                }
              >
                {!item.typeOftransactions && `- `}
                {item.amount}
              </td>
              <td>
                <button
                  type="button"
                  className={s.deleteBtn}
                  onClick={()=>toggle()}

                  // onClick={() => { 
                  //    dispatch(
                  //     transactionsOperations.deleteTransaction(item._id),
                  //    );
                  // }}
                >
                  <img className={s.icon} src={deleteIcon} alt="Delete icon" />
                </button>
               {showDelModal && <Modal
                handleClickLeft={() => { dispatch(
                      transactionsOperations.deleteTransaction(item._id)
                     );}}
                     modalTitle={"Вы уверены?"}
                    onClose={toggle} />}
                {/* {setModalOpen&& (
                  <ModalDelete
                  text={'Вы действительно хотите удалить?'}
                  handleClickLeft={delModal}
                  handleClickRight={toggleModal}
                  onClose={toggleModal}/>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableDesktop;