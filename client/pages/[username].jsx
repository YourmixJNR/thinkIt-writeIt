import serverApiClient from "../libs/serverApiClient";
import Profile from "../components/profile/Profile";
import ProfileLayout from "../components/profile/layout";

const UserProfile = ({ profile }) => {
  if (!profile) {
    return <div>User not found</div>;
  }

  return (
    <ProfileLayout>
      <Profile profile={profile} />
    </ProfileLayout>
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
