import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import LogoHeader from 'components/LogoHeader';

export default function Header() {
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContaiener}>
          <Link to="/"  alt="homepage">
            <LogoHeader />
          </Link>
          <NavLink to="/developers" className={styles.team}>
            <h1>𝕋𝕖𝕒𝕞</h1>
          </NavLink>
        </div>
      </header>
    </>
  );
}
