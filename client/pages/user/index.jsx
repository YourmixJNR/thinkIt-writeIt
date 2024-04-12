import React, { useContext, useEffect } from "react";
import UserLayout from "../../components/users/layout";
import { withAuth } from "../../middleware/auth";

const Index = () => {
  return (
    <UserLayout>
      <div>
        <p onClick={logoutUser}>Hi</p>
      </div>
    </UserLayout>
  );
};

// export default Index;

export default withAuth(Index);

export { getServerSideProps } from "../../src/Chakra";
