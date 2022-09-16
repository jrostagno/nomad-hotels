import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { VscLocation } from "react-icons/vsc";

import Slider from "react-slick";
import { Hotels, HotelTypes } from "../../Types/types";

const Cards: React.FC<Hotels> = ({ hotels, ...props }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box {...props}>
      <Slider {...settings}>
        {hotels.map((hotel: HotelTypes, i: number) => (
          <Box key={i} paddingX="35px">
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
                height="auto"
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
                width="368px"
                minHeight="130px"
                backdropFilter="blur(4px)"
                padding="18px"
                borderRadius="16px"
                bgColor={hotel.bgcolor}
                bottom="35px"
                right="-25px"
              >
                <Stack>
                  <Box>
                    <Flex gap={1} alignItems="center">
                      <VscLocation color="white" fontSize="md" />
                      <Text
                        color="#FFFFFF"
                        letterSpacing="wider"
                        fontSize="md"
                        lineHeight="7"
                        fontWeight="normal"
                      >
                        {hotel.location}
                      </Text>
                    </Flex>
                    <Image
                      marginTop={5}
                      maxWidth="130px"
                      maxHeight="40px"
                      alt="info"
                      src={hotel.avatar}
                    />
                    {hotel.description !== "" && (
                      <Box
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
                      <Stack spacing={2} marginTop={1}>
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
