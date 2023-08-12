"use client";
import styles from "@/styles/globals.css";
import ChatProvider from "@/context/chatProvider";
import BackendState from "@/context/BackendState";
import { ChakraProvider } from "@chakra-ui/react";
export default function App({ Component, pageProps }) {
  return (
    <ChatProvider>
      <ChakraProvider>
        <BackendState>
          <Component {...pageProps} />
        </BackendState>
      </ChakraProvider>
    </ChatProvider>
  );
}
