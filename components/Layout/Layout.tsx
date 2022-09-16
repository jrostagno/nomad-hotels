import { Box, list, Stack } from "@chakra-ui/react";
import React from "react";
import { LayoutProps } from "../../Types/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: React.FC<LayoutProps> = ({ list, children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="screen">
      <Header list={list}></Header>
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
