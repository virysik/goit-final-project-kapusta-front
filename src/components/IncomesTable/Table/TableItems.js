import React from 'react';

const DataTableItem = ({ id, date, description, category, amount }) => (
  <>
    <td>{id}</td>
    <td>{date}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{amount}</td>
  </>
)

export default DataTableItem