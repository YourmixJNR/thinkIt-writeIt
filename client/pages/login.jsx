import React, { useContext, useEffect } from "react";
import Layout from "../components/layout";
import LoginForm from "../components/forms/LoginForm";
import AuthRedirect from "../utils/AuthRedirect";

const Login = () => {

  return (
    <AuthRedirect>
      <Layout>
        <LoginForm />
      </Layout>
    </AuthRedirect>
  );
};

export default Login;

export { getServerSideProps } from "../src/Chakra";
