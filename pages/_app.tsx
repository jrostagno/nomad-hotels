import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import Fonts from "../components/Fonts/Fonts";

const theme = extendTheme({
  fonts: {
    heading: `'canada-type-gibson', sans-serif`,
    body: `'canada-type-gibson', sans-serif`,
  },

  colors: {
    primary: "#3D63A9",
    secondary: "#3D63A9",
    terciary: "#F4F4F4",
    baseGray: "#676767",
  },
  fontSizes: {
    sm: "0.9375rem",
    xs: "0.8125rem",
    lg: "1.25rem",
    xl: "2rem",
    xlg: "2.5rem",
    xxl: "6.875rem",
  },
  letterSpacings: {
    wider: "0.04em",
    wide: "0.03em",
    tight: "-0.02em",
    tighter: "-0,04em",
  },
  lineHeights: {
    6: "3.5rem",
    7: "4.25rem",
    9: "6.125rem",
    10: "6.87rem",
  },
  borderRadius: {
    base: "16px",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Head>
        <title>Nomade</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
