import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import LogoHeader from 'components/LogoHeader';
import UserMenuHeader from 'components/UserMenuHeader';

export default function Header() {
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContaiener}>
          <Link to="/"  alt="homepage">
            <LogoHeader />
          </Link>
          <NavLink to="/developers" className={styles.team}>
            Team
          </NavLink>
          <UserMenuHeader />

        </div>
      </header>
    </>
  );
}
