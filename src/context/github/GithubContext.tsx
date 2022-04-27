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

  // Get Initial Users (testing purposes)
  const getUsers = async () => {
    setLoading();

    try {
      const response = await axios.get(`${GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      const data = await response.data;

      dispatch({
        type: 'GET_USERS',
        payload: data,
      });
    } catch (error) {
      throw new Error();
    }
  };

  // Set Loading
  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, getUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
