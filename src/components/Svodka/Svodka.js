import React from 'react';
import s from './Svodka.module.css';

export default function Svodka({ items }) {
  return (
    <table className={s.reportHistory}>
      <tr>
        <th className={s.reportHeader} colspan="3">
          Сводка
        </th>
      </tr>
      {items.map(x => (
        <tr key={x.id}>
          <td className={s.reportData}>{x.month}</td>
          <td className={s.reportData}>{x.sum}</td>
        </tr>
      ))}
    </table>
  );
}
