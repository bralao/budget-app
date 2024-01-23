import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];

    switch (action.type) {

      case 'ADD_BUDGET':
        new_expenses = state.expenses.map((expense) => {
          if (expense.name === action.payload.name) {
            expense.unitprice += 10;
          }
          return expense;
        });

        return {
          ...state,
          expenses: new_expenses,
        };

      case 'RED_BUDGET':
        new_expenses = state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.unitprice = Math.max(expense.unitprice - 10, 0);
        }
        return expense;
        });

        return {
          ...state,
          expenses: new_expenses,
        };

      case 'DEL_BUDGET':
        new_expenses = state.expenses.filter((expense) => expense.name !== action.payload.name);
        break;


      case 'CHG_LOCATION':
        action.type = "DONE";
        state.Location = action.payload;
        return {
          ...state
        };

      default:
        return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
      { id: "Marketing", name: 'Marketing', unitprice: 50 },
      { id: "Finance", name: 'Finance', unitprice: 300 },
      { id: "Human Resources", name: 'Human Resources', unitprice: 70 },
      { id: "Sales", name: 'Sales', unitprice: 40 },
      { id: "IT", name: 'IT', unitprice: 500 },
    ],
    Location: '£'
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();


// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const totalExpenses = state.expenses.reduce((total, item) => {
      return total + item.unitprice;
  }, 0);
  state.CartValue = totalExpenses;

  return (
      <AppContext.Provider
          value={{
              expenses: state.expenses,
              CartValue: state.CartValue,
              dispatch,
              Location: state.Location
          }}
      >
          {props.children}
      </AppContext.Provider>
  );
};

export const setBudget = (dispatch, budget) => {
  dispatch({
    type: 'SET_BUDGET',
    payload: budget,
  });
};
