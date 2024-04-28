import useServerApi from "../libs/useServerApi";
import Profile from "../components/profile/Profile";
import ProfileLayout from "../components/profile/layout";
import Head from "next/head";

const UserProfile = ({ profile }) => {
  if (!profile) {
    return <div>User not found</div>;
  }

  const pageTitle = `${profile.name} (@${profile.username}) | thinkIt-writeIt`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ProfileLayout>
        <Profile profile={profile} />
      </ProfileLayout>
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
    const { data } = await useServerApi.get(`${formattedUsername}`);
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
