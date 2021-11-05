import React from 'react';
import s from './HomePage.module.css';
import imgText from '../../images/svg/Kapusta.svg';

const HomePageView = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.firstSection}>
          <div className={s.backgroundImage}></div>
          <div className={s.text}>
            <img className={s.imgText} src={imgText} alt="Kapusta" />
            <h1 className={s.fontText}>SMART FINANSE</h1>
          </div>
        </div>
        <div className={s.secondSection}>
          <div className={s.backgroundImageBottom}></div>
        </div>
      </div>
    </>
  );
};

export default HomePageView;
