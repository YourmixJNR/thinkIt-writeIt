import React from "react";
import Layout from "../../components/layout";
import RegisterForm from "../../components/forms/RegisterForm";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://think-it-write-it.vercel.app/register"
        />
        <meta name="keywords" content="Writers" />
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Register now to enjoy thinkIt-writeIt"
        />
        <meta property="og:title" content="thinkIt-writeIt for Writers" />
        <meta
          property="og:description"
          content="Register now to enjoy thinkIt-writeIt"
        />
        <meta
          property="og:url"
          content="https://think-it-write-it.vercel.app/register"
        />
        <meta
          property="og:image"
          content="https://think-it-write-it.vercel.app/favicon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourmixjnr" />
        <meta name="twitter:creator" content="@yourmixjnr" />
        <meta name="twitter:title" content="thinkIt-writeIt for Writers" />
        <meta
          name="twitter:url"
          content="https://think-it-write-it.vercel.app/register"
        />
        <meta
          name="twitter:description"
          content="Register now to enjoy thinkIt-writeIt"
        />
        <meta
          name="twitter:image"
          content="https://think-it-write-it.vercel.app/favicon.png"
        />
        <title>Register | thinkIt-writeIt</title>
      </Head>
      <Layout>
        <RegisterForm />
      </Layout>
    </>
  );
};

export default Register;
