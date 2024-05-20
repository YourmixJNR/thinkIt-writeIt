import UserLayout from "../../components/users/layout";
import User from "../../components/users/User";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://thinkit-writeit.vercel.app/user"
        />
        <meta name="keywords" content="Writers" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="thinkIt-writeIt: Update your details here"
        />
        <meta property="og:title" content="thinkIt-writeIt for Writers" />
        <meta
          property="og:description"
          content="thinkIt-writeIt: Update your details here"
        />
        <meta
          property="og:url"
          content="https://thinkit-writeit.vercel.app/user"
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
          content="https://thinkit-writeit.vercel.app/user"
        />
        <meta
          name="twitter:description"
          content="thinkIt-writeIt: Update your details here"
        />
        <meta
          name="twitter:image"
          content="https://thinkit-writeit.vercel.app/favicon.png"
        />
        <title> User | thinkIt-writeIt</title>
      </Head>
      <UserLayout>
        <User />
      </UserLayout>
    </>
  );
};

export default Index;
