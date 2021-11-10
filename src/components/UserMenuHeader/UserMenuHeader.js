import sprite from '../../images/svg/sprite.svg';
import styles from './UserMenuHeader.module.css';

export default function UserMenuHeader() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.firstLetterUser}>U</span>
      <span className={styles.userName}>User name</span>
      <a href="#" className={styles.linkLogOut}>
        <span className={styles.logOutText}>Выйти </span>
        <svg
          className={styles.logOutIcon}
          data-link="home"
          width="16px"
          height="16px"
        >
          <use data-link="home" href={sprite + '#icon-logout'} />
        </svg>
      </a>
    </div>
  );
}
