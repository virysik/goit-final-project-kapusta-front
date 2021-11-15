import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';
import { authSelectors, authOperations  } from 'redux/auth';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import styles from '../UserMenuHeader.module.css';
import { RiLogoutBoxRLine, RiUserLine } from 'react-icons/ri';

const UserLogOut = () => {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)

   const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const logoutModal = () => {
    dispatch(authOperations.logOut());
    toggleModal();
  };

  const [setModalOpen, setShowModal] = useState(false);

  const viewPort = useWindowDimensions();

  return (
    <div className={styles.wrapper}>
      {viewPort.width > 768 && (
        <>
          <RiUserLine className={styles.userIcon} />
          <span className={styles.userName}>{name}</span>
          <button type="button" onClick={toggleModal} className={styles.logOutBtn}>
            <p className={styles.logOutTextBtn}>Выйти</p>
          </button>
        </>
      )}
        {viewPort.width < 768 && (
        <>
           <RiUserLine className={styles.userIcon} />
          <div className={styles.logOutIcon}>
            <RiLogoutBoxRLine  onClick={toggleModal} color={"#CBCCD0"} size={"16px"} />
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