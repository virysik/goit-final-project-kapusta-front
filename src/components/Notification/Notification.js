import s from './Notification.module.css';

const Notification = ({ onClose }) => {
  const handleClickWindow = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.commentWrapper} onClick={handleClickWindow}>
      <p className={s.comment}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p className={s.commentText}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
      {/* <h6 className={s.clickClose}>Кликни 👆🏼 что бы закрыть</h6> */}
    </div>
  );
};

export default Notification;
