import s from './CategoryInfo.module.css';
import sprite from '../../images/svg/icon.svg';

export default function CategoryInfo({ trans }) {
  return (
    <ul className={s.list}>
      {trans.length === 0 ? (
        <li className={s.transEmpty}>За данный период транзакций нет</li>
      ) : (
        trans.map(item => (
          <li key={item.category} className={s.item}>
            <p className={s.price}>{item.value}</p>

            <svg className={item.isActive ? s.iconActive : s.icon}>
              <use
                className={s.useSvg}
                xlinkHref={`${sprite}#${item.category}`}
              />
            </svg>

            <h3 className={s.price}>{item.category}</h3>
          </li>
        ))
      )}
    </ul>
  );
}
