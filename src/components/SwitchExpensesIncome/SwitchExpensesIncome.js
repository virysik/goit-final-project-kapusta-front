import React from 'react';
import Expenses from 'components/Expenses';

import Income from 'components/Income';

export default function SwitchExpensesIncome() {
  let showExpenses = true;
  let showIncomes = false;
  return (
    <div>
      <div>
        {showExpenses && <Expenses />}
        {showIncomes && <Income />}
      </div>
    </div>
  );
}
