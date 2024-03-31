const authReducer = (state, action) => {
    switch (action.type) {
       case "LOGIN":
         return { ...state, user: action.payload, isLoggedIn: true, };
       case "LOGOUT":
         return { ...state, user: null, isLoggedIn: false, };
       default:
         return state;
    }
   };

   export default authReducer
   