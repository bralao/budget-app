import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import SpentSoFar from './components/SpentSoFar';
import Remaining from './components/Remaining';

const App = () => {
    return (
        <AppProvider>
          <div className='container'>
            <h1 className='mt-3'>Shopping App</h1>

            <div className='row mt-3'>
              <div className='col-3'>
                  <Budget />
              </div>

              <div className='col-3'>
                <Remaining/>
              </div>

              <div className='col-3'>
                <SpentSoFar/>
              </div>

              <div className='col-3'>
                <Location />
              </div>
            </div>


            <h3 className='mt-3'>Shopping Cart</h3>

            <div className='row '>
              <div className='col-sm'>
                <ExpenseList />
              </div>
            </div>

            <h3 className='mt-3'>Add Items</h3>

            <div className='row mt-3'>
              <div className='col-sm'>
                <ItemSelected/>
              </div>
            </div>

          </div>
        </AppProvider>
    );
};
export default App;
