import React, { useContext, useEffect } from "react";
import UserLayout from "../../components/users/layout";
import { AuthContext } from "../../context/auth/authContext";

const Index = () => {
const {logoutUser} = useContext(AuthContext)

  return (
      <UserLayout>
        <div>
          <p onClick={logoutUser}>Hi</p>
        </div>
      </UserLayout>
  );
};

export default Index;

export { getServerSideProps } from "../../src/Chakra";
