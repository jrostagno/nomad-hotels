import {
  Box,
  Button,
  Center,
  Highlight,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Divider } from "@chakra-ui/react";

import React from "react";
import { DrawerCardsTypes } from "../../Types/types";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const DrawerCards: React.FC<DrawerCardsTypes> = ({
  description,
  nameURL,
  image,
  features,
  price,
}) => {
  return (
    <>
      <Stack
        direction={{ base: "column", sm: "row" }}
        display="flex"
        maxW="full"
        spacing={{ base: 5, sm: 6 }}
        overflow="hidden"
      >
        <Image
          minWidth="252px"
          maxHeight={{ base: "200px", sm: "full" }}
          src={image}
          alt="image"
        />

        <Box
          marginLeft="20px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap={5}
          marginTop="30px"
        >
          <Image
            maxHeight="35px"
            maxWidth="110px"
            objectFit="contain"
            src={nameURL}
            alt="image"
          />
          <Text fontSize="sm" letterSpacing="wider" lineHeight="shorter">
            {description}
          </Text>
          <Box>
            {features &&
              features.length > 0 &&
              features.map((feature: string, index: number) => (
                <Text
                  width="full"
                  color="baseGray"
                  fontSize="xs"
                  letterSpacing="wide"
                  fontWeight="normal"
                  key={feature}
                  display="inline"
                >
                  {index === features.length - 1 ? feature : `${feature} ·`}{" "}
                </Text>
              ))}
          </Box>

          <Text fontSize="sm" fontWeight="black" lineHeight="6" color="#2B2B2B">
            <Highlight
              query="Desde"
              styles={{ py: "1", fontWeight: "400", color: "baseGray" }}
            >
              {` Desde $ ${price}/noche`}
            </Highlight>
          </Text>
          <Box>
            <Button
              bgColor="primary"
              color="white"
              width={{ base: "full", sm: "auto" }}
            >
              Reservar ahora
            </Button>
          </Box>
        </Box>
      </Stack>
      <Center height="50px">
        <Divider orientation="horizontal" />
      </Center>
    </>
  );
};

export default DrawerCards;
