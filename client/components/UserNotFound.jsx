import React from "react";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const UserNotFound = () => {
  return (
    <Flex
      as={"section"}
      flexDir={"column"}
      justify={"center"}
      align={"center"}
      mb={"2rem"}
      minH={"100vh"}
    >
      <Heading as={"h1"} fontSize={{ base: "10rem", md: "15rem" }}>
        404
      </Heading>
      <Text
        fontSize={"1.25rem"}
        textAlign={"center"}
        maxW={"508px"}
        mb={"2rem"}
      >
        The page you’re looking for can’t be found. It may have been deleted,
        moved, or never existed.
      </Text>
      <Link
        as={NextLink}
        href="/"
        bg={"customYellow"}
        p={2}
        textDecor={"none"}
        fontSize={"1rem"}
        fontWeight={"semibold"}
        textColor={"white"}
        borderRadius={"0.2rem"}
        colorScheme="none"
      >
        Go to home
      </Link>
    </Flex>
  )
}

export default UserNotFound
