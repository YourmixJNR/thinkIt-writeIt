import React from "react";
import Layout from "../../components/layout";
import RegisterForm from "../../components/forms/RegisterForm";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register | thinkIt-writeIt</title>
      </Head>
      <Layout>
        <RegisterForm />
      </Layout>
    </>
  );
};

export default Register;
