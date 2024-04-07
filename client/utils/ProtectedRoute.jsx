import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/auth/authContext";

const ProtectedRoute = ({ children }) => {
 const { state } = useContext(AuthContext);
 const router = useRouter();

 useEffect(() => {
    if (!state.isLoggedIn) {
      router.push("/login");
    }
 }, [state.isLoggedIn, router]);

 return children;
};

export default ProtectedRoute;
