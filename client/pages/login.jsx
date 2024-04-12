import React, { useContext, useEffect } from "react";
import Layout from "../components/layout";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default Login;

export { getServerSideProps } from "../src/Chakra";
