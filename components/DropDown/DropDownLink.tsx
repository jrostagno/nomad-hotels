import { Menu, Button, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { DropdownLinkTypes } from "../../Types/types";

const DropDownLink: React.FC<DropdownLinkTypes> = ({
  isOpen,
  onClose,
  onOpen,
  options,
  buttonName,
}) => {
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        fontSize="sm"
        letterSpacing="wider"
        bgColor="white"
        fontWeight="normal"
        padding="8px"
        _hover={{ bg: "gray.50" }}
        as={Button}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {buttonName}
      </MenuButton>
      <MenuList
        style={{ inset: "0px auto auto -10px" }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        fontSize="sm"
        minWidth="fit-content"
        letterSpacing="wider"
        fontWeight="normal"
        padding="8px"
        marginTop={5}
      >
        {options.map((el, index) => (
          <MenuItem key={index} justifyContent="center">
            {el.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropDownLink;
