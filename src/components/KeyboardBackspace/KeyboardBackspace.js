import s from './KeyboardBackspace.module.css';
import sprite from '../../images/svg/sprite.svg';

export default function KeyboardBackspace() {
  return (
    <div className={s.comeBackeContainer}>
      <a className={s.comeBackeHome} src="">
        <svg className={s.iconKeyboardBackspace}>
          <use href={sprite + '#icon-keyboard_backspace'}></use>
        </svg>
        <p className={s.textComeBacke}>Вернуться на главную</p>
      </a>
    </div>
  );
}
