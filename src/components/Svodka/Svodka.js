import React from 'react';
import s from './Svodka.module.css';

export default function Svodka({ items }) {
  return (
    <div className={s.wrap}>
      <table className={s.reportHistory}>
        <tr className={s.tr}>
          <th className={s.reportHeader} colspan="3">
            Сводка
          </th>
        </tr>
        {items.map(x => (
          <tr className={s.tr} key={x.id}>
            <td className={s.month}>{x.month}</td>
            <td className={s.sum}>{x.sum}</td>
          </tr>
        ))}
        <tr className={s.empty}>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
