import { ReactComponent as GoogleIcon } from '../../images/svg/google.svg';
import s from './GoogleAuth.module.css';

// const BASE_URL = 'https://git.heroku.com/kapusta-group-8.git';
const BASE_URL = 'http://localhost:3030/api';

const GoogleAuth = () => {
  return (
    <>
      <a href={`${BASE_URL}/users/google`} className={s.buttonGoogle}>
        <GoogleIcon className={s.googleSvg} />
        Google
      </a>
    </>
  );
};

export default GoogleAuth;
