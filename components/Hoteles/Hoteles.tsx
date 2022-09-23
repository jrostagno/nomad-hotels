import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Hotels } from "../../Types/types";

import Cards from "./Cards";

const Hoteles: React.FC<Hotels> = ({ hotels }) => {
  return (
    <Box
      scrollSnapAlign="start"
      // height="100vh"
      minHeight={{ base: "full", sm: "900px" }}
    >
      <Box
        bgColor="terciary"
        maxWidth={{ base: "full", md: "95%" }}
        borderRadius={10}
      >
        <Stack spacing={12} zIndex="3" padding={{ base: 8, sm: 20 }}>
          <Stack spacing={10} paddingLeft="38px">
            <Heading
              fontSize={{ base: "4xl", sm: "5xl" }}
              letterSpacing="tight"
              paddingY={8}
              lineHeight="6"
              fontWeight="semibold"
            >
              Hoteles que son hogares
            </Heading>
            <Text
              fontSize={{ base: "2xl", sm: "xl" }}
              fontWeight="light"
              lineHeight={{ base: "2em", sm: "tall" }}
            >
              Siéntete parte de la tribu en un ambiente diseñado para que <br />{" "}
              experimentes el viaje que va a cambiar algo en ti.
            </Text>
          </Stack>
          <Cards hotels={hotels} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Hoteles;
