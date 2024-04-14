import React, { useContext, useEffect } from "react";
import UserLayout from "../../components/users/layout";
import { AuthContext } from "../../context/auth/authContext";
import User from "../../components/users/User";

const Index = () => {

  const {logoutUser} = useContext(AuthContext)
  return (
    <UserLayout>
      <User />
    </UserLayout>
  );
};

export default Index;

export { getServerSideProps } from "../../src/Chakra";
