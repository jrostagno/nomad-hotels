import { CalendarIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Divider,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import React from "react";
import { NavBarProps } from "../../Types/types";
import DrawerCards from "../Drawer/DrawerCards";
import DropDownLink from "../DropDown/DropDownLink";

const NavBar: React.FC<NavBarProps> = ({
  options,
  onCloseDropDown,
  onOpenDropDown,
  isOpenDropDown,
  list,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Breadcrumb
      sx={{
        ol: {
          display: "flex",
          alignItems: "center",
          gap: "32px",
        },
      }}
      separator=""
      bgColor="white"
      padding={{ base: 0, sm: "8px" }}
      borderRadius={{ base: "16px", lg: "10px" }}
      {...props}
    >
      {list &&
        list.length > 0 &&
        list.map((el, index) => {
          if (el.name === "Experimenta") {
            return (
              <BreadcrumbItem
                display={{ base: "none", lg: "block" }}
                key={index}
              >
                <DropDownLink
                  options={options}
                  buttonName={el.name}
                  onClose={onCloseDropDown}
                  onOpen={onOpenDropDown}
                  isOpen={isOpenDropDown}
                />
              </BreadcrumbItem>
            );
          }
          if (el.name === "English") {
            return (
              <BreadcrumbItem
                display={{ base: "none", lg: "flex" }}
                key={index}
              >
                <Center height="40px">
                  <Divider orientation="vertical" />
                </Center>
                <BreadcrumbLink
                  marginLeft={10}
                  fontSize="sm"
                  letterSpacing="wider"
                  padding="8px"
                  fontWeight="normal"
                  href="#"
                >
                  English
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          }
          if (el.name === "Reservar") {
            return (
              <BreadcrumbItem key={index}>
                <Button
                  bgColor={{ base: "white", lg: "primary" }}
                  color={{ base: "primary", lg: "white" }}
                  onClick={onOpen}
                >
                  <Flex alignItems="center" flexGrow="full" gap={2}>
                    <CalendarIcon />
                    Reservar
                  </Flex>
                </Button>
                <Drawer
                  size={{ base: "full", sm: "lg" }}
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton
                      paddingX="5"
                      marginTop={{ base: 4, sm: 6 }}
                      marginRight={{ base: 2, sm: 3 }}
                    />
                    <DrawerHeader
                      fontSize={{ base: "xl", sm: "5xl" }}
                      lineHeight="tight"
                      fontWeight="semibold"
                      letterSpacing="wide"
                    >
                      Reservar
                    </DrawerHeader>

                    <DrawerBody>
                      {el.hostelInfo &&
                        el.hostelInfo.map((hostel, index) => (
                          <DrawerCards
                            key={index}
                            features={hostel.features}
                            price={hostel.price}
                            image={hostel.image}
                            nameURL={hostel.nameURL}
                            description={hostel.description}
                          />
                        ))}
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </BreadcrumbItem>
            );
          }

          return (
            <BreadcrumbItem display={{ base: "none", lg: "block" }} key={index}>
              <BreadcrumbLink
                fontSize="sm"
                letterSpacing="wider"
                fontWeight="normal"
                padding="8px"
                href="#"
              >
                {el.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
    </Breadcrumb>
  );
};

export default NavBar;
