import React from "react";
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";

const HomeForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
      <CustomInput
        type="email"
        placeholder="Email your address"
        value={email}
        onChange={handleEmailChange}
        helperValue={"Request a Demo Now .!"}
      />
      <Box flexShrink={0}>
        <CustomButton buttonText={"Start Now"} />
      </Box>
    </Box>
  );
};

export default HomeForm;
