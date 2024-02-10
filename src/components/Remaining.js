import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, Location } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.unitprice;
  }, 0);

  const remainingBudget = budget - totalExpenses;

  return (

    <div className='alert alert-primary d-flex justify-content-center'>
      <span>Remaining: {Location}{remainingBudget}</span>
    </div>

  );
};

export default Remaining;
