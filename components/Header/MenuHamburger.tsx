import {
  AddIcon,
  CalendarIcon,
  HamburgerIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export interface MenuHamburgerType {
  options: { name: string }[];
}

const MenuHamburger: React.FC<MenuHamburgerType> = ({ options }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box borderRadius="16px" display={{ base: "block", lg: "none" }}>
      <Button padding={{ base: 0, sm: "27px", lg: 0 }} onClick={onOpen}>
        <HamburgerIcon fontSize="20px" />
      </Button>

      <Drawer size="full" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent paddingY="10">
          <DrawerHeader>
            <Image alt="nav" src="/logonav.png" />
            <DrawerCloseButton paddingX="5" marginTop={7} marginRight={4} />
          </DrawerHeader>

          <DrawerBody marginTop={3}>
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              letterSpacing="tight"
              lineHeight="7"
            >
              Alojate
            </Text>
            <Divider orientation="horizontal" />
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              letterSpacing="tight"
              lineHeight="7"
            >
              Co-Work
            </Text>
            <Divider orientation="horizontal" />
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton paddingX="0px">
                        <Box
                          flex="1"
                          fontSize="2xl"
                          fontWeight="semibold"
                          letterSpacing="tight"
                          lineHeight="7"
                          textAlign="left"
                        >
                          Experimenta
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {options.map(
                        (option: { name: string }, index: number) => (
                          <Text
                            fontSize="2xl"
                            fontWeight="semibold"
                            letterSpacing="tight"
                            lineHeight="7"
                            key={index}
                          >
                            {option.name}
                          </Text>
                        )
                      )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </DrawerBody>
          <DrawerFooter>
            <Stack width="full" gap={2}>
              <Flex gap={2} marginBottom={10}>
                <Image src="/globe.svg" alt="language" />
                <Text>Español</Text>
              </Flex>

              <Button
                bgColor="primary"
                color="white"
                width="full"
                onClick={onOpen}
              >
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  flexGrow="full"
                  gap={2}
                >
                  <CalendarIcon />
                  Reservar
                </Flex>
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MenuHamburger;
