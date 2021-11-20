import { useLocation } from 'react-router-dom';
import Container from '../../components/Container';
import imgText from '../../images/svg/Kapusta.svg';
import { useDispatch } from 'react-redux';
import { googleLogIn } from '../../redux/auth/auth-slice';
import { authOperations } from 'redux/auth';
import axios from 'axios';
import s from './GoogleRedirectView.module.css';

const GoogleRedirectView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const balance = new URLSearchParams(location.search).get('balance');
  const token = new URLSearchParams(location.search).get('token');
  const email = new URLSearchParams(location.search).get('email');
  const name = new URLSearchParams(location.search).get('name');
  console.log(token);
  console.log(balance);
  console.log(email);
  console.log(name);
  const newUser = {
    email,
    balance,
    token,
    name,
  };
  authOperations.token.set(token);
  console.log(axios.defaults.headers.common.Authorization);
  dispatch(googleLogIn(newUser));
  return (
    <section className={s.section}>
      <Container>
        <div className={s.mainWrapper}>
          <div className={s.textWrapper}>
            <img className={s.kapusta} src={imgText} alt="Kapusta" />
            <h1 className={s.title}>smart finance</h1>
          </div>
          <div>
            <h2 className={s.notice}>Redirecting...</h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GoogleRedirectView;
