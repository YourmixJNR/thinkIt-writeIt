// import React, { useContext, useEffect } from "react";
// import { useRouter } from "next/router";
// import { AuthContext } from "../context/auth/authContext";

// const AuthRedirect = ({ children }) => {
//   const { state } = useContext(AuthContext);
//   const router = useRouter();

//   const checkState = state.isLoggedIn !== null && state.isLoggedIn === true

//   useEffect(() => {
//     if (checkState) {
//       router.push("/user");
//     }
//   }, [state.isLoggedIn, router]);

//   return children;
// };

// export default AuthRedirect;
