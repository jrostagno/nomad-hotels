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
      <Link href="#">
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
          fontSize="sm"
          fontWeight="semibold"
          lineHeight="base"
          color="white"
          letterSpacing="wider"
        >
          {subtitle}
        </Text>
      </Link>

      <Box>
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
    </Stack>
  );
};

export default UserInformation;
