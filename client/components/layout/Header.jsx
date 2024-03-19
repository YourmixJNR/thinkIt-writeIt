import React from "react";
import Image from "next/image";
import Nav from "../navigation/Nav";
import image from "../constant/image";
import { useScreenSize } from "../../hooks/useScreenSize";
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
  useColorModeValue,
} from "@chakra-ui/react";
import Switch from "../switch/Switch";

const Header = () => {
  const { isMobile } = useScreenSize();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <Flex
      as={"header"}
      alignItems={"center"}
      justify={"space-between"}
      p={"1rem"}
      bg={useColorModeValue("white", "")}
    >
      <Image src={image.SiteLogo} alt="site logo" width={60} />

      <Switch />

      {!isMobile ? (
        <Nav customStyles={{ display: "flex", gap: 50 }} />
      ) : (
        <Box>
          <Button
            ref={btnRef}
            onClick={onOpen}
            bg={"customYellow"}
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
            display={{ md: "none" }}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                top={"30px"}
                width={"none"}
                height={"none"}
                ref={btnRef}
                onClick={onOpen}
                bg={"customYellow"}
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
              <DrawerHeader paddingTop={"5rem"}>Hi @Username</DrawerHeader>
              <DrawerBody>
                <Nav
                  customStyles={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                />
              </DrawerBody>
              <DrawerFooter>
                <Box
                  ref={btnRef}
                  bg={"customOrange"}
                  p={2}
                  display={"flex"}
                  fontSize={"1rem"}
                  fontWeight={"semibold"}
                  textColor={"white"}
                  borderRadius={0}
                  colorScheme="none"
                >
                  Log Out .!
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
