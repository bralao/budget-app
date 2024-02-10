import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import SpentSoFar from './components/SpentSoFar';
import Remaining from './components/Remaining';
import './style/App.css';

const App = () => {
    return (
      <AppProvider>
        <div className='container'>

          <h1>Budget App</h1>

          <div className="row">
            <div className='col'>
                <Budget />
            </div>

            <div className='col mt-5'>
              <Remaining/>
            </div>

            <div className='col mt-5'>
              <SpentSoFar/>
            </div>

            <div className='col mt-5'>
              <Location />
            </div>
          </div>


          <h4 className='my-3 pt-4'>Budget Management</h4>

          <div className='row '>
            <div className='col-sm'>
              <ExpenseList />
            </div>
          </div>

          <div className="my-5 py-2">
            <h4 className='mt-3'>Add Items</h4>

            <div className='row mt-3'>
              <div className='col-sm'>
                <ItemSelected/>
              </div>
            </div>
          </div>

        </div>
      </AppProvider>
    );
};

export default App;
