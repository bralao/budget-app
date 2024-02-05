import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, Location } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.unitprice;
  }, 0);

  const remainingBudget = budget - totalExpenses;

  return (
    <div className='alert alert-primary w-75 d-flex justify-content-center py-5'>
      <span>Remaining: {Location}{remainingBudget}</span>
    </div>
  );
};

export default Remaining;
