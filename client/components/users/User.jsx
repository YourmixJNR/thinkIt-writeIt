import React from "react";
import { Box } from "@chakra-ui/react";
import CustomInput from "../ui/CustomInput";

const User = () => {
  return (
    <Box as="section" py={"2rem"} px={{ base: "1rem", lg: "5rem" }}>
      <CustomInput label={"Bio"} />
    </Box>
  );
};

export default User;
