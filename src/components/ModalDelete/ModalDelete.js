// import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import styles from 'ModalDelete';
// // import {
// //     transactionsOperations,
// //   } from 'redux/transactions';

// const modalRoot = document.querySelector('#modal-root');

// // const handleClickLeft = dispatch(
// //     transactionsOperations.deleteTransaction(item._id),
// //   )

// function ModalDelete ({
//     handleClickLeft,
//     handleClickRight,
//     onClose,
//     modalTitle = 'Вы действительно хотите удалить?',
//     modalButtonLeft = 'Да',
//     modalButtonRight = 'Нет',
//     styleReg,
// }) {
//     useEffect (() => {
//         window.document.body.style.overflowY = 'hidden';
//         window.addEventListener('keydown', handleKeyDown);
//         return () => {
//           window.removeEventListener('keydown', handleKeyDown);
//           window.document.body.style.overflowY = 'visible';
//         };
//     });

//     const handleKeyDown = e => {
//         if (e.code === 'Escape') {
//             onClose();
//         }
//     };

//     const handleOverlayClick = e => {
//         if (e.currentTarget === e.target) {
//             onClose();
//         }
//     };

//     return createPortal(
//         <div className={styles.modalWrapper} onClick={handleOverlayClick}>
//             <div className={`${styles.modalContainer} ${styleReg}`}>
//                 <span className={styles.closeBtn} onClick={onClose}>
//                     &#10006;
//                 </span>

//                 <div className={styles.title}>
//                     <p>{modalTitle}</p>
//             </div>

//             <div className={styles.buttons}>
//                 <button className={styles.buttonStyles} onClick={handleClickLeft}>
//                     {modalButtonLeft}
//                 </button>
//                 <button className={styles.buttonStyles} onClick={handleClickRight}>
//                   {modalButtonRight}  
//                 </button>
//             </div>
//         </div>
//    </div>,
//    modalRoot
// );
// }
// export default ModalDelete;

import { useState } from "react";

const DelModal = () => {
    const [showDelModal, setShowDelModal] = useState(false);
    
  function toggle() {
    setShowDelModal(!showDelModal);
  }

  return {
    showDelModal,
    toggle,
  }
};

export default DelModal;