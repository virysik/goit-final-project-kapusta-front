import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { ImWarning } from 'react-icons/im';
import s from './RegistrationForm.module.css';

const RegisterForm = ({ onClickComeBack }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('это обязательное поле');
  const [emailError, setEmaiError] = useState('это обязательное поле');
  const [passwordError, setPasswordError] = useState('это обязательное поле');
  const [errorSymbol, setErrorSymbol] = useState('*');

  const onRegister = () => dispatch(register({ name, email, password }));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setNameDirty(value);
      case 'email':
        return setEmailDirty(value);
      case 'password':
        return setPasswordDirty(value);
      default:
        return;
    }
  };

  const nameHandler = e => {
    setName(e.target.value);
    const re = /^[A-Za-zА-Яа-яЁё' '\-()0-9]{3,30}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Некорректное имя');
      setErrorSymbol('*');
      if (!e.target.value) {
        setNameError('Это обязательное поле!!!');
        setErrorSymbol('*');
      }
    } else {
      setNameError('');
    }
  };

  const emailHandler = e => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaiError('Некорректный email');
      setErrorSymbol('*');
      if (!e.target.value) {
        setEmaiError('Это обязательное поле!!!');
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
        setPasswordError('Это обязательное поле!!!');
      }
    } else {
      setPasswordError('');
    }
  };

  const clearInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onRegister();
    clearInput();
    toast.custom(
      <div className={s.toastDiv}>
        <ImWarning className={s.toastIcon} /> There was sent an email
        confirmation to your email adress: {email}. Please confirm it.
      </div>,
    );
  };

  return (
    <div className={s.formRegistr}>
      <p className={s.promtText}>Для регистрации заполните форму:</p>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <div>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {nameDirty && nameError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Имя:
            </p>
            <input
              onBlur={handleChange}
              onChange={nameHandler}
              type="text"
              name="name"
              value={name}
              placeholder="Ваше имя"
              className={s.formInput}
              pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
              title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
              required
            />
            {nameDirty && nameError && (
              <div
                style={{
                  color: 'red',
                  fontSize: 10,
                  paddingTop: 4,
                  textAlign: 'left',
                }}
              >
                {nameError}{' '}
              </div>
            )}
          </label>
        </div>
        <div>
          <label className={s.formLabel} htmlFor="">
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
              type="text"
              name="email"
              value={email}
              placeholder="Your@email.com"
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
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {passwordDirty && passwordError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Пароль:
            </p>
            <input
              onBlur={handleChange}
              onChange={passwordHandler}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
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
          <button type="button" onClick={onClickComeBack} className={s.button}>
            ВЕРНУТЬСЯ
          </button>
          <button type="submit" className={s.button}>
            ГОТОВО
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
