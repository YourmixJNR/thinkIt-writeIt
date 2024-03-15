import React from "react";
import Image from "next/image";
import Nav from "../navigation/Nav";
import image from "../constant/image";
import {
  Flex,
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <Flex
      as={"header"}
      alignItems={"center"}
      justify={"space-between"}
      p={"1rem"}
      bg={"white"}
      sm
    >
      <Image src={image.SiteLogo} alt="site logo" width={60} />

      <Button
        ref={btnRef}
        onClick={onOpen}
        bg={"#feb42b"}
        p={2}
        display={"flex"}
        fontSize={"1rem"}
        fontWeight={"semibold"}
        textColor={"white"}
        borderRadius={0}
        colorScheme="none"
      >
        Open Me .!
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex height={"100%"} justifyContent={"space-between"} flexDirection={"column"}>
            <Box> Hello</Box>
            <Box>Hi</Box>
            <Box>Footer</Box>
          </Flex>
          {/* <DrawerCloseButton
            bg={"#feb42b"}
            p={2}
            display={"flex"}
            fontSize={"1rem"}
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={0}
            // width={"100%"}
            colorScheme="none"
          >
            Hello Close
          </DrawerCloseButton>
          <DrawerHeader>Hi</DrawerHeader> */}
          {/* <Nav /> */}
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
