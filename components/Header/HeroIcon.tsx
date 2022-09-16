import { Box, Heading } from "@chakra-ui/react";

import React from "react";
import { HeroIconTypes } from "../../Types/types";

export const HeroIcon: React.FC<HeroIconTypes> = ({ children, ...props }) => {
  return (
    <Box marginTop={40} marginLeft={20} marginRight={20}>
      <Heading {...props}>{children}</Heading>;
    </Box>
  );
};
