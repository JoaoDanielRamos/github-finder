import { createContext, useReducer } from 'react';
import axios from 'axios';
import githubReducer from './GithubReducer';

const GithubContext: any = createContext({});

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }: { children: any }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // * Search for users
  const searchUsers = async (text: any) => {
    setLoading();

    const params = new URLSearchParams({ q: text });

    try {
      const response = await axios.get(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      const { items } = await response.data;

      dispatch({
        type: 'GET_USERS',
        payload: items,
      });
    } catch (error) {
      throw new Error();
    }
  };

  // * Set Loading
  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });

  // * Clear users from the state
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
      payload: [],
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
