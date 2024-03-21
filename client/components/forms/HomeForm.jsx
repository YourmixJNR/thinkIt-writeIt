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
    <Box display={"flex"} gap={"1rem"} flexDirection={"column"}>
     <Box flexShrink={0} w={"100%"} maxW={"500px"}>
     <CustomInput
        type="email"
        placeholder="Email your address"
        value={email}
        onChange={handleEmailChange}
        helperValue={"Request a Demo Now .!"}
      />
     </Box>
      <Box flexShrink={0} pt={{sm: "0" , md:"0.5rem"}}>
        <CustomButton buttonText={"Start Now"} />
      </Box>
    </Box>
  );
};

export default HomeForm;
