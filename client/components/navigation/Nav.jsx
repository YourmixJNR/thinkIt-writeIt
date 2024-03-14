import React from "react";
import links from "./links";
import Link from "next/link";

const Nav = () => {
 return (
    <nav>
      {links.map(({ name, icon, path }, index) => {
        return (
          <Link href={path} key={index}>
            <span>{icon}</span>
            {name}
          </Link>
        );
      })}
    </nav>
 );
};

export default Nav;
