// 'use-client'

// import React, { useContext, useEffect } from "react";
// import { useRouter } from "next/router";
// import { AuthContext } from "../context/auth/authContext";

// const ProtectedRoute = ({ children }) => {
//   const { state } = useContext(AuthContext);
//   const router = useRouter();
 
//   const isLoggedIn = state.isLoggedIn === true;

//     // // Check if the user is authenticated
//     // if (!isLoggedIn) {
//     //   // If not, redirect to the login page
//     //   router.push("/login");
//     // }

//     useEffect(() => {
//         if (!state.isLoggedIn) {
//             router.push("/login")
//         }
//     })

 
//   return children;
//  };
 

// export default ProtectedRoute;
