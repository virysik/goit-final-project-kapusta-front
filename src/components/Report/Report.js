import React from 'react';
import s from './Report.module.css';

const Report = ({ items }) => {
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
};
// import { CurrentMonth } from './CurrentMonth';

// const Report = ({ month, year, onHandleClickRight, onHandleClickLeft }) => {
//   return (
//     <div className={s.navigationWrapper}>
//       <CurrentMonth
//         currentMonth={month}
//         currentYear={year}
//         onHandleClickRight={onHandleClickRight}
//         onHandleClickLeft={onHandleClickLeft}
//       />
//     </div>
//   );
// };

export default Report;
