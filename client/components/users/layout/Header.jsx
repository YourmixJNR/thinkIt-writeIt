import React, { useContext } from "react";
import image from "../../constant/image";
import Image from "next/image";
import { Box, Flex, Link } from "@chakra-ui/react";
import Switch from "../../switch/Switch";
import NextLink from "next/link";
import { AuthContext } from "../../../context/auth/authContext";

const Header = () => {
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
          <Image
            src={user.picture}
            alt="site logo"
            height={60}
            width={60}
          />
        )}
      </Flex>
    </Box>
  );
};

export default Header;
