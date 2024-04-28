import UserLayout from "../../components/users/layout";
import User from "../../components/users/User";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title> User | thinkIt-writeIt</title>
      </Head>
      <UserLayout>
        <User />
      </UserLayout>
    </>
  );
};

export default Index;
