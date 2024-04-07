const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER" :
      return  {...state, isLoading: false};
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        loading: false,
      };
    case "LOGOUT":
      return { ...state, user: null, isLoggedIn: false, loading: false };
    default:
      return state;
  }
};

export default authReducer;
