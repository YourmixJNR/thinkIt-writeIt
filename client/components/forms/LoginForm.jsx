import React, { useContext } from "react";
import { useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import PasswordInput from "../ui/PasswordInput";
import axios from "axios";
import { useCustomToast } from "../../hooks/useCustomToast";
import { AuthContext } from "../../context/auth/authContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { success, error } = useCustomToast();

  const { state, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post("api/auth/login", { email, password });
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      success("Login Successfully");
      clearFormState();
      setLoading(false);
    } catch (err) {
      console.log(err);
      error(err.response.data);
      setLoading(false);
    }
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
      </Box>
    </Box>
  );
};

export default LoginForm;
