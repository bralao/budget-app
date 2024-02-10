import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = () => {
  const { dispatch, budget, expenses, Location } = useContext(AppContext);
  const [name, setName] = useState('');
  const [unitprice, setUnitprice] = useState('');
  const [action, setAction] = useState('Add');

  const totalExpenses = expenses.reduce((total, item) => {
      return total + item.unitprice;
  }, 0);

  const remainingBudget = budget - totalExpenses;

  const submitEvent = () => {
    const parsedUnitPrice = parseInt(unitprice);

    if (isNaN(parsedUnitPrice) || parsedUnitPrice <= 0) {
        alert('Please enter a valid positive unit price.');
        return;
    }

    if (action === 'Add' && parsedUnitPrice > remainingBudget) {
        alert(`The value cannot exceed the remaining funds (${remainingBudget}).`);
        return;
    }

    dispatch({
        type: 'MODIFY_BUDGET',
        payload: {
            name: name,
            unitprice: action === 'Add' ? parsedUnitPrice : -parsedUnitPrice,
        },
    });
  };


  return (
    <div>
      <div className='row'>
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>

          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
          </div>

          <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="Marketing"> Marketing</option>
            <option value="Finance" name="Finance">Finance</option>
            <option value="Human Resources" name="Human Resources">Human Resources</option>
            <option value="Sales" name="Sales">Sales</option>
            <option value="IT" name="IT">IT</option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">Action</label>
          </div>

          <select className="custom-select" id="inputGroupSelect02" value={action} onChange={(event) => setAction(event.target.value)}>
            <option value="Add" name="Add">Add</option>
            <option value="Reduce" name="Reduce">Reduce</option>
          </select>

          <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>

          <div className="p-2">
            {Location}
          </div>
          <input
            required='required'
            type='number'
            id='cost'
            value={unitprice}
            style={{size: 10}}
            onChange={(event) => setUnitprice(event.target.value)}>
          </input>

          <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
            Save
          </button>

        </div>
      </div>
    </div>
  );
};

export default ItemSelected;
