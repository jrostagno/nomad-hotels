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
} from "@chakra-ui/react";

import React from "react";
import { NavBarProps } from "../../Types/types";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import DrawerCards from "../Drawer/DrawerCards";
import DropDownLink from "../DropDown/DropDownLink";

const NavBar: React.FC<NavBarProps> = ({
  options,
  onCloseDropDown,
  onOpenDropDown,
  isOpenDropDown,
  list,
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
      padding="8px"
      borderRadius="16px"
    >
      {list &&
        list.length > 0 &&
        list.map((el, index) => {
          if (el.name === "Experimenta") {
            return (
              <BreadcrumbItem key={index}>
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
              <BreadcrumbItem key={index}>
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
                <ButtonPrimary onClick={onOpen}>
                  <Flex alignItems="center" flexGrow="full" gap={2}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 3H8.5V5H15.5V3H17V5H21V9.5V11V21H3V11V9.5V5H7V3ZM15.5 6.5V8H17V6.5H19.5V9.5H4.5V6.5H7V8H8.5V6.5H15.5ZM4.5 11V19.5H19.5V11H4.5Z"
                        fill="white"
                      />
                    </svg>
                    Reservar
                  </Flex>
                </ButtonPrimary>
                <Drawer
                  size="lg"
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader
                      fontSize="5xl"
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
            <BreadcrumbItem key={index}>
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
