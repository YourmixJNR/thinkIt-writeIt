import React from "react";
import { useState } from "react";
import { Text, Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ label, isRequired, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handelPasswordChange = (e) => {
    const newPassword = e.target.value;

    // Check password length
    if (newPassword.length < 5) {
      setPasswordError("Password must be at least five characters long.");
    } else {
      setPasswordError("");
    }

    onChange(e);
  };

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Box position={"relative"}>
        <Input
          value={value}
          type={showPassword ? "text" : "password"}
          onChange={handelPasswordChange}
          borderColor={"gray.400"}
        />
        <Box
          position={"absolute"}
          top={"50%"}
          right={"0.5rem"}
          transform={"translateY(-50%)"}
          cursor={"pointer"}
          zIndex={50}
          onClick={togglePassword}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </Box>
      </Box>
      {passwordError && (
        <Text
          as={"p"}
          textColor={"customOrange"}
          fontSize={"0.8rem"}
          mt={"4px"}
        >
          {passwordError}
        </Text>
      )}
    </FormControl>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordInput;
