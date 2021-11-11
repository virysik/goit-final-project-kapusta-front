import { ReactComponent as GoogleIcon } from '../../images/svg/google.svg';
import s from './GoogleAuth.module.css';

const GoogleAuthButton = ({ onClick, disabled }) => (
  <button className={s.buttonGoogle} onClick={onClick} disabled={disabled}>
    <GoogleIcon className={s.googleSvg} />
    Google
  </button>
);

export default GoogleAuthButton;