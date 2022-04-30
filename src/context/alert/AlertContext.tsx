// * Modules
import { createContext, useReducer } from 'react';

// * Reducer
import AlertReducer from './AlertReducer';

const AlertContext: any = createContext({});

export const AlertProvider = ({ children }: { children: any }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
