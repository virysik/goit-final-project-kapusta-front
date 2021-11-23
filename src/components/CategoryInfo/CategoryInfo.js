import sprite from '../../images/svg/icon.svg';
import { useDispatch } from 'react-redux';
import { transactionsReducer } from 'redux/transactions';
import s from './CategoryInfo.module.css';

export default function CategoryInfo({ trans }) {

  console.log(trans);
  const dispatch = useDispatch();

  const handleClick = category => {
    dispatch(transactionsReducer.addCurrentCategory(category));
  };

  return (
    <ul className={s.list}>
      {trans?.length === 0 ? (
        <li className={s.transEmpty}>За данный период транзакций нет</li>
      ) : (
        trans?.map(item => (
          <li
            key={item.category}
            className={s.item}
            onClick={() => handleClick(item.category)}
          >
            <p className={s.price}>{item.sum}</p>

            <svg className={s.icon}>
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
