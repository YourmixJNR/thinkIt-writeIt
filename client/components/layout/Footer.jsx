import React from "react";
import { Box, Text, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Nav from "../navigation/Nav";
import SocialMediaIcons from "../ui/SocialMediaIcons";

const Footer = () => {
  return (
    <Box
      as={"footer"}
      pt={"1rem"}
      borderTop={"1px"}
      borderTopColor={"gray.200"}
    >
      <Flex
        maxW={"1440px"}
        m={"auto"}
        gap={"2rem"}
        flexDir={"column"}
        alignItems={"center"}
        px={{ base: "1rem", lg: "5rem" }}
        py={"1rem"}
      >
        <Heading as={"h2"}>Think It Write It</Heading>
        <Text maxW={"40rem"} textAlign={"center"}>
          Join our amazing team. We help you promote your work for free, and
          give organic reach to your social media handle.
        </Text>
        <Nav customStyles={{ display: "flex", gap: 20 }} />
        <Flex gap={"1rem"} fontSize={"1.5rem"}>
          <SocialMediaIcons />
        </Flex>
      </Flex>
      <Box
        py={"1rem"}
        textAlign={"center"}
        borderTop={"1px"}
        borderTopColor={"gray.300"}
      >
        built with ❤️ from YourmixJNR
      </Box>
    </Box>
  );
};

export default Footer;
