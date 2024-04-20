import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomTextarea = ({
  label,
  type,
  isRequired,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Textarea
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        borderColor={"gray.400"}
      />
    </FormControl>
  );
};

CustomTextarea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default CustomTextarea;
