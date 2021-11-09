import React from "react";
import s from "./Table.module.css"

import items from './data.json';

const TableDesktop = () => {
  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead className={s.headerTable}>
          <tr className={s.tableTh}>
            <th className={s.tableTh}>Дата</th>
            <th className={s.tableTh}>Описание</th>
            <th className={s.tableTh}>Категория</th>
            <th className={s.tableTh}>Сумма</th>
            <th className={s.tableTh}></th>
          </tr>
        </thead>
        <tbody> 
          {items.map((item) => (
            <tr className={s.tableTr} key={item.id}>
              <td className={s.tableTd}>
                {new Date(item.date).toLocaleString().slice(0, 10)}
              </td>
              <td className={s.tableTd}>{item.description}</td>
              <td className={s.tableTd}>{item.category}</td>
              <td className={s.tableTd}>
                <span className={s.spanItemTable}>{item.amount}</span>
              </td>
              <td className={s.tableTd}>
                {item.action}
                <svg className={s.delIcon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_14:254)">
                    <path d="M16.308 4.02333L15.9106 2.832C15.7592 2.37827 15.3361 2.07339 14.8579 2.07339H11.5177V0.985886C11.5177 0.442337 11.0758 0 10.5324 0H7.47348C6.93021 0 6.48815 0.442337 6.48815 0.985886V2.07339H3.14803C2.66971 2.07339 2.2466 2.37827 2.09526 2.832L1.69783 4.02333C1.60733 4.29456 1.6532 4.59489 1.82033 4.82684C1.98746 5.05879 2.25786 5.19736 2.54378 5.19736H2.9592L3.87354 16.5038C3.94152 17.3427 4.65343 18 5.49457 18H12.6968C13.5378 18 14.2499 17.3427 14.3177 16.5037L15.232 5.19736H15.4621C15.748 5.19736 16.0184 5.05879 16.1855 4.82698C16.3526 4.59503 16.3985 4.29456 16.308 4.02333ZM7.54284 1.05469H10.463V2.07339H7.54284V1.05469ZM13.2664 16.4187C13.2425 16.7141 12.9923 16.9453 12.6968 16.9453H5.49457C5.19904 16.9453 4.94883 16.7141 4.92493 16.4187L4.01732 5.19736H14.1739L13.2664 16.4187ZM2.76996 4.14267L3.09584 3.16571C3.10326 3.14319 3.12427 3.12808 3.14803 3.12808H14.8579C14.8817 3.12808 14.9026 3.14319 14.9101 3.16571L15.236 4.14267H2.76996Z" fill="#52555F" />
                    <path d="M11.5845 16.3813C11.5938 16.3819 11.6031 16.382 11.6124 16.382C11.891 16.382 12.1239 16.1637 12.1385 15.8821L12.6337 6.37593C12.6488 6.08507 12.4252 5.83691 12.1345 5.82181C11.843 5.80629 11.5956 6.03013 11.5804 6.321L11.0853 15.8272C11.0702 16.1181 11.2936 16.3662 11.5845 16.3813Z" fill="#52555F" />
                    <path d="M5.89105 15.8833C5.90643 16.1644 6.13906 16.3819 6.41715 16.3819C6.42677 16.3819 6.43665 16.3816 6.4464 16.3811C6.73713 16.3653 6.96001 16.1167 6.94422 15.8259L6.42553 6.31967C6.40974 6.0288 6.16117 5.80592 5.87031 5.82185C5.57959 5.83764 5.3567 6.08621 5.37249 6.37707L5.89105 15.8833Z" fill="#52555F" />
                    <path d="M9.00891 16.3819C9.30019 16.3819 9.53625 16.1459 9.53625 15.8546V6.34839C9.53625 6.05711 9.30019 5.82104 9.00891 5.82104C8.71764 5.82104 8.48157 6.05711 8.48157 6.34839V15.8546C8.48157 16.1459 8.71764 16.3819 9.00891 16.3819Z" fill="#52555F" />
                  </g>
                  <defs>
                    <clipPath id="clip0_14:254">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableDesktop;