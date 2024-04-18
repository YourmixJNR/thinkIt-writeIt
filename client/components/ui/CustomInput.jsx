import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomInput = ({
  label,
  type,
  isRequired,
  value,
  onChange,
  placeholder,
  helperValue,
}) => {
  const [emailError, setEmailError] = useState("");
  const handelEmailChange = (e) => {
    const newEmail = e.target.value;

    // check the format of the email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }

    onChange(e);
  };

  return (
    <FormControl isRequired={isRequired} isInvalid={emailError}>
      <FormLabel>{label}</FormLabel>
      <Input
        value={value}
        type={type}
        onChange={handelEmailChange}
        placeholder={placeholder}
        borderColor={"gray.400"}
      />
      <FormHelperText>{helperValue}</FormHelperText>
      <FormErrorMessage>{emailError}</FormErrorMessage>
    </FormControl>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  isRequired: PropTypes.any,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  helperValue: PropTypes.node,
  errorValue: PropTypes.node,
};

export default CustomInput;
