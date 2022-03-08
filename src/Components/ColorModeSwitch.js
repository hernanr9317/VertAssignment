import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      marginRight="10px"
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
    />
  );
};
