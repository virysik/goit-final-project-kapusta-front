import s from './Income.module.css';
import sprite from '../../images/svg/sprite.svg';

export default function Income() {
  return (
    <div className={s.blok}>
      <div className={s.navigation}>
        <a src="" className={s.arrowLink}>
          <svg className={s.iconPrevious}>
            <use href={sprite + '#icon-previous'}></use>
          </svg>
        </a>

        <p className={s.title}>Доходы</p>

        <a src="" className={s.arrowLink}>
          <svg className={s.iconNext}>
            <use href={sprite + '#icon-next'}></use>
          </svg>
        </a>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.price}></span>
          <div className={s.bg}>
            <svg className={s.icon}>
              <use href={sprite + '#icon-salary-1'}></use>
            </svg>
          </div>
          <p className={s.category}>ЗП</p>
        </li>

        <li className={s.item}>
          <span className={s.price}></span>
          <div className={s.bg}>
            <svg className={s.icon}>
              <use href={sprite + '#icon-salary'}></use>
            </svg>
          </div>
          <p className={s.category}>Доп. доход</p>
        </li>
      </ul>
    </div>
  );
}
