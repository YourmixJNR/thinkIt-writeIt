import serverApiClient from "../libs/serverApiClient";
import Profile from "../components/Profile";
import Layout from "../components/layout";

const UserProfile = ({ profile }) => {

  if (!profile) {
    return <div>User not found</div>;
  }

  console.log(profile.name)

  return (
    <Layout>
      <Profile profile={profile} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { username } = context.params;

  if (!username || typeof username !== "string") {
    return {
      notFound: true,
    };
  }

  try {
    const { data } = await serverApiClient.get(`${username}`);
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
