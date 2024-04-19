const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default userReducer
