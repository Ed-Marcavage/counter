import React from "react";
import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Layout from "./components/Layout";
import Count from "./components/Count";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
        <Count />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
