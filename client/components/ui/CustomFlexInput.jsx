import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomFlexInput = ({
  label,
  type,
  isRequired,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <FormControl isRequired={isRequired} display={"flex"} alignItems={"center"}>
     <Box>
         <FormLabel marginBottom={"0px"}>{label}</FormLabel>
     </Box>
      <Input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        borderColor={"gray.400"}
      />
    </FormControl>
  );
};

CustomFlexInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default CustomFlexInput;
