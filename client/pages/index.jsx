import Home from "../components/Home";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Index;

export { getServerSideProps } from "../src/Chakra";
