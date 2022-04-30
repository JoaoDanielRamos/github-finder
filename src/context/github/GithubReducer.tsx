const githubReducer = (state: any, action: any) => {
  switch (action.type) {
    // * Get all the users
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    // * Get a single user
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    // * Get Repos
    case 'GET_USER_REPOS':
      return {
        ...state,
        userRepos: action.payload,
        loading: false,
      };

    // * Clean all users from the search page
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };

    // * Set loading to true e display spinner
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default githubReducer;
