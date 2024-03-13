import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
