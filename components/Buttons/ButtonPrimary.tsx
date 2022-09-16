import { Button } from "@chakra-ui/react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      bgColor="primary"
      textColor="white"
      fontSize="sm"
      letterSpacing="wider"
      fontWeight="semibold"
      display="inline-block"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
