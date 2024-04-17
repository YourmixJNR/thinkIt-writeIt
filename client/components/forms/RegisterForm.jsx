import React, { useContext } from "react";
import { useState } from "react";
import NextLink from "next/link";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import PasswordInput from "../ui/PasswordInput";
import { AuthContext } from "../../context/auth/authContext";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("")
  const [error, setError] = useState("")

  const { registerUser, state } = useContext(AuthContext);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 // check the format of the email using a regular expression
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 if (!emailRegex.test(email)) {
   setEmailError('Invalid email format.')
   return
 }

    const userData = {
      email: email,
      password: password,
    };

    registerUser(userData);

    clearFormState();
  };

  const clearFormState = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Box as="section" py={"2rem"} px={{ base: "1rem", lg: "5rem" }}>
      <Box w={"100%"} maxW={"550px"} m={"auto"}>
        <Heading as={"h3"} py={"1.5rem"}>
          Sign Up
        </Heading>
        <Box borderRadius={"1rem"} p={"0.5rem"}>
          <form onSubmit={handleSubmit}>
            <Flex flexDirection={"column"} gap={"1rem"}>
              <CustomInput
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
              <PasswordInput
                label={"Confirm Password"}
                isRequired={true}
                value={confirmPassword}
                onChange={handleConfirmPassword}
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
        <Text textAlign={"center"} py={"1rem"} as={"p"}>
          Already register .?{" "}
          <Link as={NextLink} href="/auth/login">
            Login
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default RegisterForm;
