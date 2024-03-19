import { Text, Flex, Box, Heading } from "@chakra-ui/react";
import HomeForm from "./forms/HomeForm";

const Home = () => {
  return (
    <Flex flexDirection={"column"} px={{ base: "2rem", lg: "8rem" }}>
      <Heading as={"h1"}>We Provide Solutions for Writers</Heading>
      <Text>
        Think it Write it is a conglomerate of content writers. We help you
        promote your work for free, and give organic reach to your social media
        handle
      </Text>
       <HomeForm />
    </Flex>
  );
};

export default Home;
