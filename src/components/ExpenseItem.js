import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/ExpenseItem.css';

const ExpenseItem = (props) => {
  const { dispatch, Location } = useContext(AppContext);

  const handleDeleteItem = () => {
    const item = {
      name: props.name,
      unitprice: 0,
    };
    dispatch({
      type: 'DEL_BUDGET',
      payload: item,
    });
  };

  const handleReduceBy10 = () => {
    const item = {
      name: props.name,
      unitprice: Math.max(props.unitprice - 10, 0),
      quantity: 10, // Added quantity property
    };

    dispatch({
      type: 'RED_BUDGET',
      payload: item,
    });
  };

  const handleAddBy10 = () => {
    const item = {
      name: props.name,
      unitprice: props.unitprice + 10,
      quantity: 10, // Added quantity property
    };
    dispatch({
      type: 'ADD_BUDGET',
      payload: item,
    });
  };

  return (
    <tr className="text-center">
      <td>{props.name}</td>
      <td>{Location}{parseInt(props.unitprice)}</td>
      <td>
        <button className="btn btn-primary" size='2.2em' color="green" onClick={handleAddBy10}>+</button>
      </td>
      <td>
        <button className="btn btn-secondary" size='2.2em' color="blue" onClick={handleReduceBy10}>-</button>
      </td>
      <td>
        <button className="btn btn-danger" size='2.2em' color="red" onClick={handleDeleteItem}>X</button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
