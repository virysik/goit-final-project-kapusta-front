import { Link, NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.css';
import LogoHeader from 'components/LogoHeader';
import UserLogOut from './UserLogOut/UserLogOut';

export default function UserMenuHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContaiener}>
          <Link to="/" alt="homepage">
            <LogoHeader />
          </Link>
          <NavLink to="/developers" className={styles.team}>
            <h1>𝕋𝕖𝕒𝕞</h1>
          </NavLink>
          <UserLogOut/>
        </div>
      </header>
    </>
  );
}