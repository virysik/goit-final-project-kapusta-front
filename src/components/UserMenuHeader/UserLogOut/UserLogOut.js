import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/Modal';
import { logOut } from 'redux/auth/auth-operations';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import styles from '../UserMenuHeader.module.css';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const UserLogOut = () => {
  const dispatch = useDispatch()

   const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const logoutModal = () => {
    dispatch(logOut());
    toggleModal();
  };

  const [setModalOpen, setShowModal] = useState(false);

  const viewPort = useWindowDimensions();


  return (
    <div className={styles.wrapper}>
      {viewPort.width < 768 && (
        <>
          <p className={styles.firstLetterUser}>U</p>
          <p className={styles.userName}>User name</p>
        </>
      )}
      {viewPort.width < 768 && (
        <>
           <button type="button" onClick={toggleModal} className={styles.logOutBtn}>
            <p className={styles.logOutTextBtn}>Выйти</p>
          </button>
        </>
      )}
        {viewPort.width < 768 && (
        <>
          <div className={styles.logOutIcon}>
            <RiLogoutBoxRLine color={"#CBCCD0"} size={"16px"} />
          </div>
        </>
      )}
      {setModalOpen && (
        <Modal
          text={'Вы действительно хотите выйти?'}
          handleClickLeft={logoutModal}
          handleClickRight={toggleModal}
          onClose={toggleModal}
        />
      )}
     </div>
  )
}

export default UserLogOut