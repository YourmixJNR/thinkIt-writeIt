import React from "react";
import Layout from ".";
import UserLayout from "../users/layout";
import { useSession } from "next-auth/react";

const SessionLayout = ({ children }) => {
  const { data: session } = useSession();

  if (!session) {
    return <Layout>{children}</Layout>;
  }

  return <UserLayout>{children}</UserLayout>;
};

export default SessionLayout;
