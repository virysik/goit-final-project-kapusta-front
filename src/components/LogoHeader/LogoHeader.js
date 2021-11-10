import styles from './LogoHeader.module.css';

export default function logoHeader() {
  return <a href="/" className={styles.link} aria-label="Логотип сайта"></a>;
}
