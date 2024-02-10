import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
      dispatch({
          type: 'CHG_LOCATION',
          payload: val,
      })
    }


  return (
    <div className='d-flex justify-content-center'>
    {
      <select className="alert alert-success text-white" name="Location" id="Location" onChange={event=>changeLocation(event.target.value)} style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>
      <option value="">Currency</option>
      <option value="€">€ Euro</option>
      <option value="$">$ Dollar</option>
      <option value="£">£ Pound</option>
      <option value="₹">₹ Rupee</option>
    </select>
      }
    </div>
    );
};

export default Location;
