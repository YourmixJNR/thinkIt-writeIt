import React, { useContext } from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import CustomEmailInput from "../ui/inputs/CustomEmailInput";
import CustomButton from "../ui/CustomButton";
import { SubscribeContext } from "../../context/subscribe/subscribeContext";

const HomeForm = () => {
  const [email, setEmail] = useState("");

  const { subscribe, isLoading } = useContext(SubscribeContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribe({ email });
      clearFormState();
    } catch {}
  };

  const clearFormState = () => {
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display={"flex"} gap={"1rem"} flexDirection={"column"}>
        <Box flexShrink={0} w={"100%"} maxW={"500px"}>
          <CustomEmailInput
            type="email"
            placeholder="Email your address"
            value={email}
            onChange={handleEmailChange}
            helperValue={"Request a Demo Now .!"}
          />
        </Box>
        <Box flexShrink={0}>
          <CustomButton
            buttonText={"Subscribe"}
            type={"submit"}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </form>
  );
};

export default HomeForm;
