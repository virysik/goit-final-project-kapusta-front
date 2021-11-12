import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth'
import s from './LoginForm.module.css';
import GoogleAuth from '../GoogleAuth';

const LoginForm = ({ onClickRegister }) => {
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmaiError] = useState('Это обязательное поле');
  const [passwordError, setPasswordError] = useState('Это обязательное поле');
  const [errorSymbol, setErrorSymbol] = useState('*');

  const handleChange = ({ target: { name, value }}) => {
    switch (name) {
      case 'email':
        setEmailDirty(value);
        break;
      case 'password':
        setPasswordDirty(value);
        break;
      default:
        return;
    }
  };
  const emailHandler = e => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaiError('Некорректный email');
      setErrorSymbol('*');
      if (!e.target.value) {
        setEmaiError('Это обязательное поле');
        setErrorSymbol('*');
      }
    } else {
      setEmaiError('');
    }
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть не меньше 6 символов');
      if (!e.target.value) {
        setPasswordError('Это обязательное поле');
      }
    } else {
      setPasswordError('');
    }
  };

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    clearInput();
  };

  return (
    <div className={s.formLogin}>
      <p className={s.promtText}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <div className={s.animationGoogle}>
         <GoogleAuth />
      </div>
      <p className={s.promtText}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <div>
          <label className={s.formLabel}>
            <p className={s.labelText}>
              {emailDirty && emailError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Электронная почта:
            </p>
            <input
              onBlur={handleChange}
              onChange={emailHandler}
              type="email"
              name="email"
              value={email}
              placeholder="your@email.com"
              className={s.formInput}
              pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
              title="Email может, сoстоять из букв цифр и обязательного символа '@'"
              required
            />
            {emailDirty && emailError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {emailError}{' '}
              </div>
            )}
          </label>
        </div>
        <div>
          <label className={s.formLabel}>
            <span className={s.labelText}>
              {passwordDirty && passwordError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Пароль:
            </span>
            <input
              onBlur={handleChange}
              onChange={passwordHandler}
              type="password"
              name="password"
              value={password}
              placeholder="password"
              className={s.formInput}
              pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
              title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
              required
            />
            {passwordDirty && passwordError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {passwordError}{' '}
              </div>
            )}
          </label>
        </div>
        <div className={s.containerButton}>
          <button type="submit" className={s.button}>
            ВОЙТИ
          </button>
          <button type="button" onClick={onClickRegister} className={s.button}>
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;