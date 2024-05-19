import Layout from "../../layout";
import UserLayout from "../../users/layout";
import { useSession } from "next-auth/react";

const ProfileLayout = ({ children }) => {
  const { data: session } = useSession();

  if (!session) {
    return <Layout>{children}</Layout>;
  }

  return <UserLayout>{children}</UserLayout>;
};

export default ProfileLayout;
