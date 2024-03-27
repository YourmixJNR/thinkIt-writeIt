import React from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import PasswordInput from "../ui/PasswordInput";
import { useCustomToast } from "../../hooks/useCustomToast";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const {success, error} = useCustomToast()

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
    setFormLoading(true);
    try {
      await axios.post("http://localhost:8000/api/auth/register", {
        username,
        email,
        password,
      });
      success("Working Right ?")
    } catch (error) {
      console.log("Error:", error);
      error(error.response.data)
    } finally {
      clearFormState();
    }
    setFormLoading(false);
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
                  isLoading={formLoading}
                />
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
