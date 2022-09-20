import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { VscLocation } from "react-icons/vsc";

import Slider from "react-slick";
import { settings } from "../../lib/headerConst";
import { Hotels, HotelTypes } from "../../Types/types";

const Cards: React.FC<Hotels> = ({ hotels, ...props }) => {
  return (
    <Box {...props}>
      <Slider {...settings}>
        {hotels.map((hotel: HotelTypes, i: number) => (
          <Box key={i} paddingX={{ base: "8px", sm: "35px" }}>
            <Box
              maxWidth="900px"
              height="auto"
              role="group"
              margin="10px"
              position="relative"
            >
              <Image
                _groupHover={{
                  filter: "auto",
                  blur: "2px",
                }}
                width="100%"
                height={{ base: "300px", sm: "auto" }}
                borderRadius="5px"
                objectFit="cover"
                alt="nav"
                src={hotel.image}
              />

              <Box
                id="description"
                transition="300ms"
                _groupHover={{
                  transform: "scale(1.15)",
                }}
                position="absolute"
                zIndex={3}
                width={{ base: "85%", md: "55%" }}
                minHeight="30%"
                backdropFilter="blur(4px)"
                padding="18px"
                borderRadius="16px"
                bgColor={hotel.bgcolor}
                bottom={{ base: "10px", md: "35px" }}
                right={{ base: "5", md: "-25px" }}
              >
                <Stack>
                  <Box>
                    <Flex gap={1} alignItems="center">
                      <VscLocation color="white" fontSize="md" />
                      <Text
                        color="#FFFFFF"
                        letterSpacing="wider"
                        fontSize="md"
                        fontWeight="normal"
                      >
                        {hotel.location}
                      </Text>
                    </Flex>
                    <Image
                      marginTop={{ base: 2, md: 5 }}
                      maxWidth="130px"
                      maxHeight="40px"
                      alt="info"
                      src={hotel.avatar}
                    />
                    {hotel.description !== "" && (
                      <Box
                        display={{ base: "none", md: "block" }}
                        borderBottom="2px solid #879825"
                        paddingTop="5px"
                        paddingBottom="10px"
                      >
                        <Text
                          marginTop="2px"
                          color="#FFFFFF"
                          fontSize="sm"
                          lineHeight="base"
                          fontWeight="normal"
                          letterSpacing="wider"
                        >
                          {hotel.description}
                        </Text>
                      </Box>
                    )}
                    {hotel.services.length > 0 && (
                      <Stack
                        display={{ base: "none", sm: "block" }}
                        spacing={2}
                        marginTop={1}
                      >
                        <Text
                          color="#FFFFFF"
                          paddingTop="5px"
                          fontSize="xs"
                          lineHeight="5"
                          fontWeight="normal"
                          letterSpacing="wide"
                        >
                          Servicios del local
                        </Text>
                        <Flex gap={1}>
                          {hotel.services.map((service, index) => {
                            if (service === "hotel") {
                              return (
                                <Image
                                  key={index}
                                  maxWidth="15px"
                                  alt="hotel"
                                  src="/hotel.svg"
                                />
                              );
                            }
                            if (service === "kids") {
                              return (
                                <Image
                                  key={index}
                                  maxWidth="15px"
                                  alt="hotel"
                                  src="/kids.svg"
                                />
                              );
                            }
                            if (service === "food") {
                              return (
                                <Image
                                  key={index}
                                  maxWidth="15px"
                                  alt="hotel"
                                  src="/fork.svg"
                                />
                              );
                            }
                          })}
                        </Flex>
                      </Stack>
                    )}
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Cards;
