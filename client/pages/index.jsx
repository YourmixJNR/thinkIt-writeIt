import Home from "../components/Home";
import Layout from "../components/layout";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://think-it-write-it.vercel.app/" />
        <meta name="keywords" content="Writers" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="thinkIt-writeIt: We Provide Solutions for Writers."
        />
        <meta property="og:title" content="thinkIt-writeIt for Writers" />
        <meta
          property="og:description"
          content="thinkIt-writeIt: We Provide Solutions for Writers."
        />
        <meta
          property="og:url"
          content="https://think-it-write-it.vercel.app/"
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
          content="https://think-it-write-it.vercel.app/"
        />
        <meta
          name="twitter:description"
          content="thinkIt-writeIt: We Provide Solutions for Writers."
        />
        <meta
          name="twitter:image"
          content="https://think-it-write-it.vercel.app/favicon.png"
        />
        <title>thinkIt-writeIt for Writers</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default Index;
