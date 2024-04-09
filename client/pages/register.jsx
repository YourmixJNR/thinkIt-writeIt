import React from "react";
import Layout from "../components/layout";
import RegisterForm from "../components/forms/RegisterForm";
import AuthRedirect from "../utils/AuthRedirect";

const Register = () => {
  return (
    <AuthRedirect>
      <Layout>
        <RegisterForm />
      </Layout>
    </AuthRedirect>
  );
};

export default Register;

export { getServerSideProps } from "../src/Chakra";
