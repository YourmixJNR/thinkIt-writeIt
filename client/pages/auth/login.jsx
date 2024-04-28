import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout";
import LoginForm from "../../components/forms/LoginForm";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Log in | thinkIt-writeIt</title>
      </Head>
      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
};

export default Login;
