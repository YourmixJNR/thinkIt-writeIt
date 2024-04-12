import React from "react";
import Layout from "../../components/layout";
import RegisterForm from "../../components/forms/RegisterForm";

const Register = () => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};

export default Register;

export { getServerSideProps } from "../../src/Chakra";
