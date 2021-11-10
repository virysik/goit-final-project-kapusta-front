import React from 'react';
import s from './Report.module.css'

const Report = ({ items }) => {
    return (
        <table className={s.reportHistory}>
                <tr>
                    <th colspan="3">Сводка</th>
                </tr>
                {items.map((x) => (
                    <tr key={x.id}>
                    <td>{x.month}</td>
                    <td>{x.sum}</td>
                    </tr>
                ))}
        </table>
    );
}
export default Report
