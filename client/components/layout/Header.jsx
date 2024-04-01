import React, { useContext } from "react";
import Image from "next/image";
import Nav from "../navigation/Nav";
import image from "../constant/image";
import NextLink from "next/link";
import { useScreenSize } from "../../hooks/useScreenSize";
import {
  Flex,
  Box,
  Link,
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
import Switch from "../switch/Switch";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AuthContext } from "../../context/auth/authContext";
import { StorageServices } from "../../libs/storage";
import { useApiClient } from "../../hooks/useApiClient";
import { useRouter } from "next/router";

const Header = () => {
  const { isMobile } = useScreenSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { state, dispatch } = useContext(AuthContext);

  const router = useRouter();

  const apiClient = useApiClient()

  const handleLogout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    StorageServices.removeUser();
    StorageServices.removeAuth();
    await apiClient.get("/auth/logout");
    router.push("/login");
  };

  return (
    <Box as={"header"} borderBottom={"1px"} borderBottomColor={"gray.200"}>
      <Flex
        maxW={"1440px"}
        m={"auto"}
        alignItems={"center"}
        justify={"space-between"}
        px={{ base: "1rem", lg: "5rem" }}
        py={"1rem"}
      >
        <Link
          as={NextLink}
          href={"/"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Image src={image.SiteLogo} alt="site logo" width={60} />
        </Link>

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
              borderRadius={"0.2rem"}
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
                  borderRadius={"0.2rem"}
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
                    borderRadius={"0.2rem"}
                    gap={1}
                    alignItems={"center"}
                    colorScheme="none"
                  >
                    <RiLogoutBoxLine />
                    <Box
                      as="span"
                      onClick={handleLogout}
                      _hover={{
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Log Out .!
                    </Box>
                  </Box>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
