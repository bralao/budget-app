import React, { useContext, useState } from 'react';
import { AppContext, setBudget } from '../context/AppContext';
import '../style/Budget.css';

const Budget = () => {
  const { dispatch, budget, Location, CartValue } = useContext(AppContext);
  const [inputBudget, setInputBudget] = useState('');

  const handleSetBudget = () => {
    const budgetValue = parseFloat(inputBudget);

    if (!isNaN(budgetValue)) {
      if (budgetValue >= CartValue && budgetValue <= 20000) {
        setBudget(dispatch, budgetValue);
        setInputBudget('');
      } else {
        console.error('Invalid budget input');
      }
    } else {
      console.error('Invalid budget input');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSetBudget();
    }
  };

  React.useEffect(() => {
    console.log('Current budget state:', budget);
  }, [budget]);

  return (
    <div>
      <div className="row">
        <div className="row justify-content-center mt-3">
          <input
            className="alert alert-primary col-8 w-50 h-25 text-center ms-4"
            type="text"
            placeholder="Set your Budget"
            value={inputBudget}
            onChange={(e) => setInputBudget(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn btn-success col-4 w-25 h-50 ms-1"
            onClick={handleSetBudget}
          >Set Budget</button>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-75 text-start">
            <p>Initial Budget: {budget}{Location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
