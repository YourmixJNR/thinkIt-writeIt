import { Text, Link, Flex, Box, Heading } from "@chakra-ui/react";
import HomeForm from "./forms/HomeForm";
import image from "./constant/image";
import NextLink from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <Box as="section" py={"2rem"} px={{ base: "1rem", lg: "5rem" }}>
      <Flex
        align={"center"}
        gap={"2rem"}
        flexDirection={{ base: "column", lg: "row" }}
        pb={"2rem"}
      >
        <Flex flexDirection={"column"} gap={"1rem"}>
          <Heading as={"h1"}>We Provide Solutions for Writers</Heading>
          <Text>
            Think it Write it is a conglomerate of content writers. We help you
            promote your work for free, and give organic reach to your social
            media handle.
          </Text>
          <Link
            as={NextLink}
            href={"/user"}
            _hover={{
              textDecoration: "none",
            }}
          >
            Hello
          </Link>
          <HomeForm />
        </Flex>
        <Box>
          <Image src={image.HomeImage} alt="Hero Image" width={900} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
