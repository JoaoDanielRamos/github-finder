import axios from 'axios';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// * Search for users
export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({ q: text });

  try {
    const response = await axios.get(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.data;

    return items;
  } catch (error) {
    throw new Error();
  }
};

// * Search for a single user
export const getUser = async (login: string) => {
  try {
    const response = await axios.get(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error();
  }
};

// * Search userRepos of a single User
export const getUserRepos = async (login: string) => {
  const params: any = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

   try {
    const response = await axios.get(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error();
  }
};
