import React, { useContext, useEffect } from "react";
import UserLayout from "../../components/users/layout";
import User from "../../components/users/User";

const Index = () => {
  return (
    <UserLayout>
      <User />
    </UserLayout>
  );
};

export default Index;
