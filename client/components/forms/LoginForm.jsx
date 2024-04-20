import React, { useContext } from "react";
import { useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CustomEmailInput from "../ui/inputs/CustomEmailInput";
import CustomButton from "../ui/CustomButton";
import PasswordInput from "../ui/inputs/PasswordInput";
import { AuthContext } from "../../context/auth/authContext";

const LoginForm = () => {
  const [email, setEmail] = useState("idan@gmail.com");
  const [password, setPassword] = useState("password1");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // state
  const { state, loginUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    await loginUser(loginData);

    clearFormState();
  };

  const clearFormState = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Box as="section" py={"2rem"} px={{ base: "1rem", lg: "5rem" }}>
      <Box w={"100%"} maxW={"550px"} m={"auto"}>
        <Heading as={"h3"} py={"1.5rem"}>
          Login
        </Heading>
        <Box borderRadius={"1rem"} p={"0.5rem"}>
          <form onSubmit={handleSubmit}>
            <Flex flexDirection={"column"} gap={"1rem"}>
              <CustomEmailInput
                label={"Email"}
                type="email"
                isRequired={true}
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <PasswordInput
                label={"Password"}
                isRequired={true}
                value={password}
                onChange={handlePasswordChange}
              />
              <Box flexShrink={0}>
                <CustomButton
                  buttonText={"Submit"}
                  type={"submit"}
                  isLoading={state.isLoading}
                />
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
