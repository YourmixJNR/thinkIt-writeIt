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

      <Box display={{ md: "none" }}>
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
            <DrawerCloseButton
              top={"30px"}
              width={"none"}
              height={"none"}
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
              Close Me .!
            </DrawerCloseButton>
            <DrawerHeader paddingTop={"5rem"}>Hi</DrawerHeader>
            <DrawerBody>
              <Nav />
            </DrawerBody>
            <DrawerFooter>Log Out</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Header;
