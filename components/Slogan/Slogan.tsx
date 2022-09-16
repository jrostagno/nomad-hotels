import { Highlight, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Slogan = () => {
  return (
    <Stack
      minHeight="900px"
      padding={40}
      justifyContent="center"
      textAlign="center"
    >
      <Text
        fontWeight="light"
        letterSpacing="tighter"
        fontSize="7xl"
        lineHeight="9"
      >
        Un hogar con espacio para coworkear,
      </Text>
      <Text
        fontWeight="light"
        letterSpacing="tighter"
        fontSize="7xl"
        lineHeight="9"
      >
        <Highlight
          query="aventuras locales"
          styles={{
            px: "2",
            py: "1",
            fontWeight: "600",
            bg: "primary",
            color: "white",
          }}
        >
          conectarte con aventuras locales
        </Highlight>
      </Text>
      <Text
        fontWeight="light"
        letterSpacing="tighter"
        fontSize="7xl"
        lineHeight="9"
      >
        y personas increíbles.
      </Text>
    </Stack>
  );
};

export default Slogan;
