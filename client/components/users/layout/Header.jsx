import React, { useContext } from "react";
import image from "../../constant/image";
import Image from "next/image";
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
import Switch from "../../switch/Switch";
import NextLink from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { AuthContext } from "../../../context/auth/authContext";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { state } = useContext(AuthContext);

  const { user } = state;

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
          href={"/user"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Image src={image.SiteLogo} alt="site logo" width={60} />
        </Link>
        <Switch />
        {user && (
          <Flex>
            <Image src={user.picture} alt="user-photo" height={48} width={48} />
            <Button
              ref={btnRef}
              onClick={onOpen}
              w={0}
              h={0}
              display={"flex"}
              fontSize={"1rem"}
              fontWeight={"semibold"}
              textColor={"white"}
              borderRadius={"0.2rem"}
              colorScheme="none"
            >
              <IoMdArrowDropdown />
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
                <DrawerHeader paddingTop={"5rem"}>Hi @Username</DrawerHeader>
                <DrawerBody></DrawerBody>
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
