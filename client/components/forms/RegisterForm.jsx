import React from "react";
import { useState } from "react";
import NextLink from "next/link";
import axios from "axios";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import PasswordInput from "../ui/PasswordInput";
import { useCustomToast } from "../../hooks/useCustomToast";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setIsLoading] = useState(false);

  const { success, error } = useCustomToast();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
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
    try {
      setIsLoading(true);
      await axios.post(`api/auth/register`, {
        username,
        email,
        password,
      });
      success("Registration Successful");
      clearFormState();
      setIsLoading(false);
    } catch (err) {
      console.log("Error:", err);
      error(err.response.data);
      setIsLoading(false);
    }
  };

  const clearFormState = () => {
    setUsername("");
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
                label={"Username"}
                type="text"
                isRequired={true}
                placeholder="Enter Username"
                value={username}
                onChange={handleUsernameChange}
              />
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
                  isLoading={loading}
                />
              </Box>
            </Flex>
          </form>
        </Box>
        <Text textAlign={"center"} py={"1rem"} as={"p"}>
          Already register .?{" "}
          <Link as={NextLink} href="/login">
            Login
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default RegisterForm;
