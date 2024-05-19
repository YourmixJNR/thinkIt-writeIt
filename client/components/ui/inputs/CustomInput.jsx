import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomInput = ({
  label,
  type,
  isRequired,
  value,
  onChange,
  placeholder,
  icon,
}) => {
  return (
    <FormControl isRequired={isRequired}>
      {icon ? (
        <Flex alignItems={"center"} gap={"0.5rem"}>
          <Box marginBottom={"2"} fontSize={"1.3rem"}>
            {icon}
          </Box>
          <FormLabel>{label}</FormLabel>
        </Flex>
      ) : (
        <FormLabel>{label}</FormLabel>
      )}
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

CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
};

export default CustomInput;
