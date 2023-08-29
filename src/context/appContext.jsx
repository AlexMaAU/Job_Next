'use client';

import { useContext, createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  user: undefined,
  isDrawerOpen: false,
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleDrawer = () => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  };

  return (
    // pass down state and dispatch as value
    <AppContext.Provider value={{ ...state, dispatch, toggleDrawer }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
