import links from "./links";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";

const Nav = ({ customStyles }) => {
  return (
    <Box as="nav" style={customStyles}>
      {links.map(({ name, icon, path }, index) => {
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
      })}
    </Box>
  );
};

export default Nav;
