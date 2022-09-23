import { Box } from "@chakra-ui/react";
import React from "react";
import { LayoutProps } from "../../Types/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: React.FC<LayoutProps> = ({ list, children }) => {
  return (
    <Box
      scrollSnapType="y proximity"
      overflowY="scroll"
      flexDirection="column"
      height="100vh"
    >
      <Header list={list}></Header>
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
