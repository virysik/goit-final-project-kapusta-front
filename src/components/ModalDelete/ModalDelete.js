import { useState } from "react";
import { useDispatch } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';

const DelModal = (_id) => {
  const dispatch = useDispatch();
    const [showDelModal, setShowDelModal] = useState(false);
    
  function toggle() {
    setShowDelModal(prevShowDelModal => !prevShowDelModal);
}
  const deleteItem = () => {
    dispatch(transactionsOperations.deleteTransaction());
    toggle();
 }

  return {
    showDelModal,
    toggle,
    deleteItem,
  }
};

export default DelModal;