import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { UserInformationTypes } from "../../Types/types";

const UserInformation: React.FC<UserInformationTypes> = ({
  position,
  title,
  subtitle,
}) => {
  return (
    <Stack
      borderBottom="1px solid white"
      display="inline-block"
      paddingRight={10}
      marginRight={10}
    >
      <Text fontSize="xs" color="white" opacity={30}>
        {position}
      </Text>
      <Link display={{ base: "none", sm: "block" }} href="#">
        <Text
          fontSize="sm"
          fontWeight="semibold"
          lineHeight="base"
          color="white"
          letterSpacing="wider"
        >
          {title}
        </Text>
        <Text
          display={{ base: "none", sm: "block" }}
          fontSize="sm"
          fontWeight="semibold"
          lineHeight="base"
          color="white"
          letterSpacing="wider"
        >
          {subtitle}
        </Text>
      </Link>

      <Box display={{ base: "none", sm: "block" }}>
        <svg
          width="36"
          height="1"
          viewBox="0 0 36 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="1" fill="white" />
        </svg>
      </Box>
      <Box display={{ base: "block", sm: "none" }}>
        <svg
          width="10"
          height="2"
          viewBox="0 0 10 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="9.47368" height="2" rx="1" fill="white" />
        </svg>
      </Box>
    </Stack>
  );
};

export default UserInformation;
