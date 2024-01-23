import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle, FaPlus, FaMinus } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
      const item = {
          name: props.name,
          unitprice: 0,
      };
      dispatch ({
        type: 'DEL_BUDGET',
        payload: item,
      });
    };

    const handleReduceItem = () => {
      const item = {
          name: props.name,
          unitprice: props.unitprice,
      };

      dispatch({
          type: 'RED_BUDGET',
          payload: item,
      });
    };


    const handleAddItem = () => {
      const item = {
        name: props.name,
        unitprice: props.unitprice,
      };
      dispatch({
        type: 'ADD_BUDGET',
        payload: item,
      });
    };

    return (
      <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td>
          <button><FaPlusCircle size='2.2em' color="green" onClick={handleAddItem}></FaPlusCircle></button>
        </td>
        <td>
          <button><FaMinusCircle size='2.2em' color="blue" onClick={handleReduceItem}></FaMinusCircle></button>
        </td>
        <td>
          <button><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></button>
        </td>
      </tr>
    );
};

export default ExpenseItem;
