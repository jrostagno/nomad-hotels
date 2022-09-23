import { Highlight, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Slogan = () => {
  return (
    <Stack
      height="100vh"
      scrollSnapAlign="start"
      minHeight="900px"
      padding={{ base: 0, sm: 40 }}
      justifyContent="center"
      textAlign="center"
    >
      <Text
        fontWeight="light"
        letterSpacing={{ base: "tight", sm: "tighter" }}
        fontSize={{ base: "xlg", md: "7xl" }}
        lineHeight={{ base: "6", sm: "9" }}
      >
        Un hogar con espacio para coworkear,
      </Text>
      <Text
        fontWeight="light"
        letterSpacing={{ base: "tight", sm: "tighter" }}
        fontSize={{ base: "xlg", md: "7xl" }}
        lineHeight={{ base: "6", sm: "9" }}
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
        letterSpacing={{ base: "tight", sm: "tighter" }}
        fontSize={{ base: "xlg", md: "7xl" }}
        lineHeight={{ base: "6", sm: "9" }}
      >
        y personas increíbles.
      </Text>
    </Stack>
  );
};

export default Slogan;
