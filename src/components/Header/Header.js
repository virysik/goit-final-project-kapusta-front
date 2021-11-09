import styles from './Header.module.css';
import LogoHeader from '../LogoHeader/LogoHeader';
import UserMenuHeader from '../UserMenuHeader/UserMenuHeader';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div class="container">
          <div className={styles.headerContaiener}>
            <LogoHeader />
            <UserMenuHeader />
          </div>
        </div>
      </header>
    </>
  );
}
