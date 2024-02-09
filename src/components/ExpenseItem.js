import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/ExpenseItem.css';

const ExpenseItem = (props) => {
  const { dispatch, Location } = useContext(AppContext);

  const handleModify = (amount) => {
    const item = {
      name: props.name,
      unitprice: amount,
    };
    dispatch({
      type: 'MODIFY_BUDGET',
      payload: item,
    });
  };

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

  return (
    <tr className="text-center">
      <td>{props.name}</td>
      <td>{Location}{parseInt(props.unitprice)}</td>
      <td>
        <button className="btn btn-primary" size='2.2em' color="green" onClick={() => handleModify(10)}>+</button>
      </td>
      <td>
        <button className="btn btn-secondary" size='2.2em' color="blue" onClick={() => handleModify(-10)}>-</button>
      </td>
      <td>
        <button className="btn btn-danger" size='2.2em' color="red" onClick={handleDeleteItem}>X</button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
