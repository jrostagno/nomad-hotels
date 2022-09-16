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

const Header: React.FC<HeaderProps> = ({ list, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minHeight="800px"
      bgRepeat="no-repeat"
      width="full"
      bgImage="url('/IMG.png')"
      bgPosition="center top"
      bgSize="100% auto"
      {...props}
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        marginTop={10}
        marginLeft={20}
        marginRight={20}
        alignItems="center"
      >
        <Box bgColor="white" padding="24px" borderRadius="16px">
          <Image alt="nav" src="/logonav.png" />
        </Box>

        <NavBar
          list={list}
          options={options}
          onCloseDropDown={onClose}
          onOpenDropDown={onOpen}
          isOpenDropDown={isOpen}
        ></NavBar>
      </Flex>
      <Box marginTop={40} marginLeft={20} marginRight={20}>
        <Heading fontSize="xxl" fontWeight="bold" color="white" lineHeight="10">
          Tu tribu <br /> te espera
        </Heading>
      </Box>
      <Box marginLeft={20} marginTop={20}>
        {userInfo.map((info) => (
          <UserInformation
            key={info.position}
            position={info.position}
            title={info.title}
            subtitle={info.subtitle}
          ></UserInformation>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
