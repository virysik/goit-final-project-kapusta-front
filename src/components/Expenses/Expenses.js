import s from './Expenses.module.css';
import sprite from '../../images/svg/sprite.svg';

export default function Expenses() {
  return (
    <div className={s.expenses}>
      <div className={s.blok}>
        <div className={s.navigation}>
          <a src="">
            <svg className={s.iconPrevious}>
              <use href={sprite + '#icon-previous'}></use>
            </svg>
          </a>

          <p className={s.title}>Расходы</p>

          <a src="">
            <svg className={s.iconNext}>
              <use href={sprite + '#icon-next'}></use>
            </svg>
          </a>
        </div>

        <div>
          <ul className={s.list}>
            <div className={s.pseudoelementFirst}>
              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-Group'}></use>
                  </svg>
                </div>
                <p className={s.category}>Продукты</p>
              </li>
              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-cocktail'}></use>
                  </svg>
                </div>
                <p className={s.category}>Алкоголь</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-kite'}></use>
                  </svg>
                </div>
                <p className={s.category}>Развлечение</p>
              </li>
            </div>

            <div className={s.pseudoelementSecond}>
              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-hands-holding-heart'}></use>
                  </svg>
                </div>
                <p className={s.category}>Здоровье</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-car'}></use>
                  </svg>
                </div>
                <p className={s.category}>Транспорт</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-couch'}></use>
                  </svg>
                </div>
                <p className={s.category}>все для дома</p>
              </li>
            </div>

            <div className={s.pseudoelementThird}>
              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-tools'}></use>
                  </svg>
                </div>
                <p className={s.category}>техника</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-invoice'}></use>
                  </svg>
                </div>
                <p className={s.category}>коммуналка, связь</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + '#icon-clay'}></use>
                  </svg>
                </div>
                <p className={s.category}>спорт, хобби</p>
              </li>
            </div>

            <li className={s.item}>
              <span className={s.price}></span>
              <div className={s.bg}>
                <svg className={s.icon}>
                  <use href={sprite + '#icon-book'}></use>
                </svg>
              </div>
              <p className={s.category}>образование</p>
            </li>

            <li className={s.item}>
              <span className={s.price}></span>
              <div className={s.bg}>
                <svg className={s.icon}>
                  <use href={sprite + '#icon-ufo'}></use>
                </svg>
              </div>
              <p className={s.category}>прочее</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
