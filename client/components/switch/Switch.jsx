import React from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import {
  toggleColorMode,
  colorMode,
  useColorMode,
  Flex,
  Box,
} from "@chakra-ui/react";

const Switch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      gap={"3"}
      border={"1px"}
      borderRadius={"5"}
      p={"0.2rem"}
      onClick={toggleColorMode}
      fontSize={"1.2rem"}
      _hover={{ cursor: "pointer" }}
    >
      <Box
        as="span"
        bg={toggleColorMode && colorMode === "light" ? "dark" : ""}
        color={"light"}
        p={"0.2rem"}
        borderRadius={"0.2rem"}
      >
        <CiLight />
      </Box>
      <Box
        as="span"
        bg={toggleColorMode && colorMode === "light" ? "" : "light"}
        color={"dark"}
        p={"0.2rem"}
        borderRadius={"0.2rem"}
      >
        <CiDark />
      </Box>
    </Flex>
  );
};

export default Switch;
