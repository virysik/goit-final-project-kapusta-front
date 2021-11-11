import styles from './Header.module.css';
import LogoHeader from 'components/LogoHeader';
import UserMenuHeader from 'components/UserMenuHeader';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContaiener}>
          <LogoHeader />
          <UserMenuHeader />
        </div>
      </header>
    </>
  );
}
