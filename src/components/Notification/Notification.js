import { useState } from 'react';
import s from './Notification.module.css';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div
      className={showNotification ? s.commentWrapper : s.hideCommentWrapper}
      onClick={() => setShowNotification(false)}
    >
      <p className={s.comment}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p className={s.commentText}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
    </div>
  );
};

export default Notification;
