import styles from './LogoHeader.module.css';
import sprite from '../../images/svg/sprite.svg';

export default function logoHeader() {
  return (
    <a href="/" aria-label="Логотип сайта">
      <svg className={styles.logoIcon} width="90px" height="31px">
        <use data-link="home" href={sprite + '#icon-logo'} />
      </svg>
    </a>
  );
}
