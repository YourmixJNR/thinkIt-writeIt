const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
       ...state,
        user: action.payload,
        isLoading: action.isLoading,
      };
    case "UPDATE_USER":
      return {
       ...state,
        isLoading: true,
      };
    case "UPDATE_USER_SUCCESS":
      return {
       ...state,
        user: action.payload,
        isLoading: false,
      };
    case "UPDATE_USER_ERROR":
      return {
       ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
