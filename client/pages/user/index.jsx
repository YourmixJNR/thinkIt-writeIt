import React, { useContext, useEffect } from "react";
import ProtectedRoute from "../../utils/ProtectedRoute";
import UserLayout from "../../components/users/layout";
import { AuthContext } from "../../context/auth/authContext";

const Index = () => {
const {logoutUser} = useContext(AuthContext)

  return (
    <ProtectedRoute>
      <UserLayout>
        <div>
          <p onClick={logoutUser}>Hi</p>
        </div>
      </UserLayout>
    </ProtectedRoute>
  );
};

export default Index;

export { getServerSideProps } from "../../src/Chakra";
