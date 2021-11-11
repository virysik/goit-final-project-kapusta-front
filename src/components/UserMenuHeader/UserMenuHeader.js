import sprite from '../../images/svg/sprite.svg';
import styles from './UserMenuHeader.module.css';
import {RiLogoutBoxRLine} from 'react-icons/ri' 

export default function UserMenuHeader() {
  return (
    <>
    <div className={styles.wrapper}>
      <p className={styles.firstLetterUser}>U</p>
      <p className={styles.userName}>User name</p>
      {/* <a href="#" className={styles.linkLogOut}> */}
        <button type="button" className={styles.logOutBtn}>
          <p className={styles.logOutTextBtn}>Выйти</p>
        </button>
        <div className={styles.logOutIcon}>
          <RiLogoutBoxRLine color={"#CBCCD0"} size={"16px"}/>
        </div>
  
        {/* <svg
          className={styles.logOutIcon}
          data-link="home"
          width="16px"
          height="16px"
        >
          <use data-link="home" href={"../../images/svg/logOutSprite.svg"} />
        </svg> */}
      {/* </a> */}
    </div>
    </>
  );
}
