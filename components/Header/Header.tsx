import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { options, userInfo } from "../../lib/headerConst";
import { HeaderProps } from "../../Types/types";

import NavBar from "./NavBar";

import UserInformation from "./UserInformation";
import MenuHamburger from "./MenuHamburger";

const Header: React.FC<HeaderProps> = ({ list, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minHeight="800px"
      bgRepeat="no-repeat"
      width="full"
      bgImage={{ base: "url('/mobileheader.png')", sm: "url('/IMG.png')" }}
      bgPosition="center top"
      bgSize={{ base: "100% auto", sm: "auto", lg: "100% auto" }}
      {...props}
    >
      <Stack
        spacing={40}
        margin={{ base: 4, sm: 10, md: 20 }}
        justifyContent="space-between"
      >
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            bgColor="white"
            padding={{ base: 3, sm: 5, lg: 6 }}
            borderRadius="8px"
          >
            <Image alt="nav" src="/logonav.png" />
          </Box>
          <Flex alignItems="center" gap={2}>
            <NavBar
              list={list}
              options={options}
              onCloseDropDown={onClose}
              onOpenDropDown={onOpen}
              isOpenDropDown={isOpen}
            />

            <MenuHamburger options={options} />
          </Flex>
        </Flex>
        <Stack spacing="40">
          <Box>
            <Heading
              fontSize={{ base: "6xl", sm: "7xl", md: "xxl" }}
              fontWeight="bold"
              color="white"
              lineHeight={{ base: "7", sm: "9", md: "10" }}
            >
              Tu tribu <br /> te espera
            </Heading>
          </Box>
          <Box>
            {userInfo.map((info) => (
              <UserInformation
                key={info.position}
                position={info.position}
                title={info.title}
                subtitle={info.subtitle}
              ></UserInformation>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
