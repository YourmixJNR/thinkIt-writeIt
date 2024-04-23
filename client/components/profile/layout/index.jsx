import { useContext } from "react";
import Layout from "../../layout";
import UserLayout from "../../users/layout";
import { AuthContext } from "../../../context/auth/authContext";

const ProfileLayout = ({ children }) => {
  const { state } = useContext(AuthContext);
  const { user } = state;

  if (!user) {
    return <Layout>{children}</Layout>;
  }

  return <UserLayout>{children}</UserLayout>;
};

export default ProfileLayout;
