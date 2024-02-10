import React, { useContext, useState } from 'react';
import { AppContext, setBudget } from '../context/AppContext';
import '../style/Budget.css';

const Budget = () => {
  const { dispatch, budget, expenses, Location } = useContext(AppContext);
  const [inputBudget, setInputBudget] = useState('');

  const handleSetBudget = () => {
    const budgetValue = parseFloat(inputBudget);
    const totalExpenses = expenses.reduce((total, item) => total + item.unitprice, 0);

    if (!isNaN(budgetValue)) {
      if (budgetValue >= totalExpenses) {
        setBudget(dispatch, budgetValue);
        setInputBudget('');
      } else {
        alert('You cannot reduce the budget lower than the spending.');
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

        <div className="">
          <p>Initial Budget: <b>{budget}{Location}</b></p>
        </div>

      <div className="row">

        <div className="col">
          <div className="text-center mt-3">
              {Location}
              <input
                className="rounded ms-1 py-2"
                type="number"
                placeholder="Input budget value"
                value={inputBudget}
                onChange={(e) => setInputBudget(e.target.value)}
                onKeyDown={handleKeyDown}
                step="10"
                max="20000"
              />
              <button
                className="btn btn-success ms-2 mb-1"
                onClick={handleSetBudget}
              >
                Set
              </button>
            </div>

        </div>


        <div className="row">
          <div className="row ms-5 ps-5 mt-2 text-end">



            <div className="">

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
