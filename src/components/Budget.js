import React, { useContext, useState } from 'react';
import { AppContext, setBudget } from '../context/AppContext';

const Budget = () => {
  const { dispatch } = useContext(AppContext);
  const [inputBudget, setInputBudget] = useState('');

  const handleSetBudget = () => {
    const budgetValue = parseFloat(inputBudget);

    if (!isNaN(budgetValue)) {
      // Set the budget using the setBudget action
      setBudget(dispatch, budgetValue);
    } else {
      // Handle invalid input (optional)
      console.error('Invalid budget input');
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary w-50 pt-3 pb-3"
        onClick={handleSetBudget}>Set Budget
      </button>
      <input
        className="w-25 p-3 ms-1 alert alert-primary"
        type="text"
        placeholder="Value"
        value={inputBudget}
        onChange={(e) => setInputBudget(e.target.value)}
      />
    </div>
  );
};

export default Budget;
