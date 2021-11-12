import { NavLink } from 'react-router-dom';
import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './ArrowToGoBack.module.css';

const ArrowToGoBack = () => {
  const viewPort = useWindowDimensions();

  return (
    <NavLink className={s.link} to="/balance">
      <span className={s.svgWrapper}>
        <svg
          width="18"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 5H3.83l3.58-3.59L6 0 0 6l6 6 1.41-1.41L3.83 7H18V5Z"
            fill="#FF751D"
          />
        </svg>
      </span>
      <span style={{ marginLeft: 15 }} className={s.arrow}>
        {viewPort.width > 767 && 'Вернуться на главную'}
      </span>
    </NavLink>
  );
};

export default ArrowToGoBack;
