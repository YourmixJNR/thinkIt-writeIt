const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, isLoading: action.isLoading };
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: action.isLoggedIn,
        isLoading: action.isLoading,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default authReducer;
