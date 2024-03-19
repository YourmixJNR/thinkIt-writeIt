import React from "react";
import links from "./links";
import Link from "next/link";
import {Box} from "@chakra-ui/react"

const Nav = ({customStyles}) => {
  
  const myStyle = {
    display: "flex",
    alignItems: "center",
    gap: 5,
  }

 return (
    <Box as="nav" style={customStyles}>
      {links.map(({ name, icon, path }, index) => {
        return (
          <Link href={path} key={index}  style={myStyle}>
            <span>{icon}</span>
            <span>{name}</span>
          </Link>
        );
      })}
    </Box>
 );
};

export default Nav;
