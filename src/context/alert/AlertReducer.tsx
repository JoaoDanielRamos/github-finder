const AlertReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'CLEAR_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default AlertReducer;
