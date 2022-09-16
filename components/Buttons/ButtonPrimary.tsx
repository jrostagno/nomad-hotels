import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonPrimary: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
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
