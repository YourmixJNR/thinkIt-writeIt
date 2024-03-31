import React, { useContext, useEffect } from "react";
import Layout from "../components/layout";
import LoginForm from "../components/forms/LoginForm";
import { AuthContext } from "../context/auth/authContext";
import { useRouter } from "next/router";
import AuthRedirect from "../utils/AuthRedirect";

const Login = () => {
  const { state } = useContext(AuthContext);
  const { isLoggedIn } = state;

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  return (
    <AuthRedirect>
      <Layout>
        <LoginForm />
      </Layout>
    </AuthRedirect>
  );
};

export default Login;
