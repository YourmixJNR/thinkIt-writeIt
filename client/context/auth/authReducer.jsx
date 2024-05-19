const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, isLoading: action.isLoading };
    case "LOGIN":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default authReducer;
