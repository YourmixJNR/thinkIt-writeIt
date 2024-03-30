import React, { useContext } from "react";
import links from "./links";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";
import { AuthContext } from "../../context/auth/authContext";

const Nav = ({ customStyles }) => {
  const { state } = useContext(AuthContext);

  return (
    <Box as="nav" style={customStyles}>
      {links.map(({ name, icon, path }, index) => {
        const isLogin = name === "Login";
        const isLogout = name === "Logout";
        const showLink = (isLogin && !state.user) || (isLogout && state.user);

        if (showLink || !(isLogin || isLogout)) {
          return (
            <Link
              as={NextLink}
              href={path}
              key={index}
              display={"flex"}
              alignItems={"center"}
              gap={2}
              _hover={{
                textDecoration: "none",
              }}
            >
              <span>{icon}</span>
              <span>{name}</span>
            </Link>
          );
        }

        return null;
      })}
    </Box>
  );
};

export default Nav;
