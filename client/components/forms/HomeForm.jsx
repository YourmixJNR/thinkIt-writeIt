import React from "react";
import { useState } from "react";
import { Box, FormHelperText } from "@chakra-ui/react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";

const HomeForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form>
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
        <Box flexShrink={0}>
          <CustomButton buttonText={"Start Now"} />
        </Box>
      </Box>
    </form>
  );
};

export default HomeForm;
