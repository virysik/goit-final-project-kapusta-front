
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from 'ModalDelete';

const modalRoot = document.querySelector('#modal-root');

function ModalDelete ({
    handleClickLeft,
    handleClickRight,
    onClose,
    modalTitle = 'Вы действительно хотите удалить?',
    modalButtonLeft = 'Да',
    modalButtonRight = 'Нет',
    styleReg,
}) {
    useEffect (() => {
        window.document.body.style.overflowY = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.document.body.style.overflowY = 'visible';
        };
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    const handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return createPortal(
        <div className={styles.modalWrapper} onClick={handleOverlayClick}>
            <div className={`${styles.modalContainer} ${styleReg}`}>
                <span className={styles.closeBtn} onClick={onClose}>
                    &#10006;
                </span>

                <div className={styles.title}>
                    <p>{modalTitle}</p>
            </div>

            <div className={styles.buttons}>
                <button className={styles.buttonStyles} onClick={handleClickLeft}>
                    {modalButtonLeft}
                </button>
                <button className={styles.buttonStyles} onClick={handleClickRight}>
                  {modalButtonRight}  
                </button>
            </div>
        </div>
   </div>,
   modalRoot
);
}
export default ModalDelete;