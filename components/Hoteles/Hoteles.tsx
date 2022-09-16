import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Hotels } from "../../Types/types";

import Cards from "./Cards";

const Hoteles: React.FC<Hotels> = ({ hotels }) => {
  return (
    <Box minHeight="900px">
      <Box bgColor="terciary" maxWidth="95%" borderRadius={10}>
        <Stack spacing={12} zIndex="3" padding={20}>
          <Stack spacing={10} paddingLeft="38px">
            <Heading
              fontSize="5xl"
              letterSpacing="tight"
              lineHeight="6"
              fontWeight="semibold"
            >
              Hoteles que son hogares
            </Heading>
            <Text fontSize="xl" fontWeight="light" lineHeight="8">
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
