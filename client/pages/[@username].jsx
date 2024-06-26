import apiServer from "../libs/apiServer";
import Profile from "../components/profile/Profile";
import SessionLayout from "../components/layout/SessionLayout";
import Head from "next/head";
import Custom404 from "./404";

const UserProfile = ({ profile }) => {
  if (!profile) {
    return <Custom404/>;
  }

  const pageTitle = `${profile.name} (@${profile.username}) | thinkIt-writeIt`;

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://thinkit-writeit.vercel.app/${profile.username}`}
        />
        <meta name="keywords" content="Writer profile" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="thinkIt-writeIt: Writer profile" />
        <meta property="og:title" content="thinkIt-writeIt for Writers" />
        <meta
          property="og:description"
          content="thinkIt-writeIt: Writer profile"
        />
        <meta
          property="og:url"
          content={`https://thinkit-writeit.vercel.app/${profile.username}`}
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
          content={`https://thinkit-writeit.vercel.app/${profile.username}`}
        />
        <meta
          name="twitter:description"
          content="thinkIt-writeIt: Writer profile"
        />
        <meta
          name="twitter:image"
          content="https://thinkit-writeit.vercel.app/favicon.png"
        />
        <title>{pageTitle}</title>
      </Head>
      <SessionLayout>
        <Profile profile={profile} />
      </SessionLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { "@username": username } = context.params;

  if (!username || !username.includes("@")) {
    return {
      notFound: true,
    };
  }

  const formattedUsername = username.split("@")[1];

  try {
    const { data } = await apiServer.get(`${formattedUsername}`);
    const profile = data.data;
    return {
      props: {
        profile,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        profile: null,
      },
    };
  }
}

export default UserProfile;
