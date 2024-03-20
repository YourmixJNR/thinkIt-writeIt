import React from "react";
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
  isInvalid,
  value,
  onChange,
  placeholder,
  helperValue,
  errorValue,
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      <FormHelperText>{helperValue}</FormHelperText>
      <FormErrorMessage>{errorValue}</FormErrorMessage>
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
