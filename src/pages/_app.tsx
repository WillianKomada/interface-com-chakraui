import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#FFBA08"
        startPosition={0.3}
        stopDelayMs={2000}
        height={4}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
