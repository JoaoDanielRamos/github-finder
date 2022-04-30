import axios from 'axios';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// * Instance for Axios
const github = axios.create({
  baseURL: GITHUB_URL,
  timeout: 1000,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// * Search for users
export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({ q: text });

  try {
    const response = await github.get(`${GITHUB_URL}/search/users?${params}`);

    const { items } = response.data;

    return items;
  } catch (error) {
    throw new Error();
  }
};

// * Search for a single user
export const getUserAndRepos = async (login: string) => {
  const params: any = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

  try {
    // * Getting User Information
    const [user, repos] = await Promise.all([
      github.get(`${GITHUB_URL}/users/${login}`),
      github.get(`${GITHUB_URL}/users/${login}/repos?${params}`),
    ]);

    return { user: user.data, userRepos: repos.data };
  } catch (error) {
    throw new Error();
  }
};
