import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext: any = createContext({});

export const AlertProvider = ({ children }: { children: any }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg },
    });
  };

  return (
    <AlertContext.Provider value={{ alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
