import {
  FormControl,
  FormLabel,
  Input,
 } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomInput = ({
  label,
  type,
  isRequired,
  value,
  onChange,
  placeholder,
  controlStyle,
  labelStyle,
  inputStyle
}) => {
  return (
    <FormControl isRequired={isRequired} style={controlStyle}>
      <FormLabel style={labelStyle}>{label}</FormLabel>
      <Input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        borderColor={"gray.400"}
        style={inputStyle}
      />
    </FormControl>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default CustomInput;
