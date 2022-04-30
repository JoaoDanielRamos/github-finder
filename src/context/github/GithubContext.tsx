import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext: any = createContext({});

export const GithubProvider = ({ children }: { children: any }) => {
  const initialState = {
    users: [],
    user: {},
    userRepos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
