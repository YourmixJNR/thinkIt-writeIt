import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ buttonText, isLoading, loadingText }) => {
  return (
    <Button
      isLoading={isLoading}
      loadingText={loadingText}
      bg={"customYellow"}
      py={2}
      px={5}
      fontSize={"1rem"}
      fontWeight={"semibold"}
      textColor={"white"}
      borderRadius={"0.2rem"}
      colorScheme="none"
    >
      {buttonText}
    </Button>
  );
};

CustomButton.propsTypes = {
  buttonText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
};

export default CustomButton;
