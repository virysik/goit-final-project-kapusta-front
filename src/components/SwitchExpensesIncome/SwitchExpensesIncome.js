import React from 'react';
import Expenses from '../Expenses/Expenses';
import Income from '../Income/Income';
import KeyboardBackspace from '../KeyboardBackspace/KeyboardBackspace';

export default function SwitchExpensesIncome() {
  return (
    <div>
      <div>
        <Expenses />
        <Income />
      </div>
    </div>
  );
}
