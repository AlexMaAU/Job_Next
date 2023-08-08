'use client';

import { useContext, createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  user: undefined,
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // pass down state and dispatch as value
    <AppContext.Provider value={{ state, dispatch }}>  
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
