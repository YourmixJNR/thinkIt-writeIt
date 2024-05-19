import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main" maxW={"1440px"} m={"auto"}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
