import s from "./CategoryInfo.module.css";
import sprite from "../../images/svg/sprite.svg";

export default function CategoryInfo({ trans }) {
  return (
    <div>
      <ul className={s.list}>
        {trans.length === 0 ? (
          <li className={s.transEmpty}>Транзакций нет</li>
        ) : (
          trans.map((item) => (
            <li key={item.category} className={s.item}>
              <span className={s.price}>{item.value}</span>

              <div className={s.iconContainer}>
                <div
                  className={
                    item.isActive ? s.svgContainerActive : s.svgContainer
                  }
                >
                  <svg className={item.isActive ? s.iconActive : s.icon}>
                    <use xlinkHref={`${sprite}#${item.category}`} />
                  </svg>
                </div>
              </div>

              <h3 className={s.titleItem}>{item.category}</h3>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
