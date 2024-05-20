import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout";
import LoginForm from "../../components/forms/LoginForm";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://thinkit-writeit.vercel.app/login"
        />
        <meta name="keywords" content="Writers" />
        <meta name="robots" content="noindex" />
        <meta name="description" content="Login now to enjoy thinkIt-writeIt" />
        <meta property="og:title" content="thinkIt-writeIt for Writers" />
        <meta
          property="og:description"
          content="Login now to enjoy thinkIt-writeIt"
        />
        <meta
          property="og:url"
          content="https://thinkit-writeit.vercel.app/login"
        />
        <meta
          property="og:image"
          content="https://thinkit-writeit.vercel.app/favicon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourmixjnr" />
        <meta name="twitter:creator" content="@yourmixjnr" />
        <meta name="twitter:title" content="thinkIt-writeIt for Writers" />
        <meta
          name="twitter:url"
          content="https://thinkit-writeit.vercel.app/login"
        />
        <meta
          name="twitter:description"
          content="Login now to enjoy thinkIt-writeIt"
        />
        <meta
          name="twitter:image"
          content="https://thinkit-writeit.vercel.app/favicon.png"
        />
        <title>Log in | thinkIt-writeIt</title>
      </Head>
      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
};

export default Login;
