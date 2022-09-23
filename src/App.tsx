import React from "react";
import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>
  );
}

export default App;
