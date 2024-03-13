import React from "react";
import { Text, Flex } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex
      align="center"
      justify="center"
      backgroundColor="#303030"
      p="5"
      textColor="white"
    >
      <Text fontSize="1rem">nextjs-cookie-based-system</Text>
    </Flex>
  );
};

export default Header;
