import { Text, Flex, Box, Heading } from "@chakra-ui/react";
import HomeForm from "./forms/HomeForm";
import image from "./constant/image";
import Image from "next/image";

const Home = () => {
  return (
    <Box as="main" py={"2rem"} px={{ base: "2rem", lg: "8rem" }}>
      <Flex flexDirection={"column"} gap={"1rem"}>
        <Heading as={"h1"}>We Provide Solutions for Writers</Heading>
        <Text>
          Think it Write it is a conglomerate of content writers. We help you
          promote your work for free, and give organic reach to your social
          media handle
        </Text>
        <HomeForm />
      </Flex>
      <Box>
        <Image src={image.HomeImage} />
      </Box>
    </Box>
  );
};

export default Home;
