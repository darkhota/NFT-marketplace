import React from "react";
import { useMoralis } from "react-moralis";
import {
  Button,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton
} from "@chakra-ui/react";

const Error = ({ title, message }) => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    logout,
    authError
  } = useMoralis();
  return (
    <Alert status="error" mb="2">
      <AlertIcon />
      <Box flex="1">
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription display="block">{message}</AlertDescription>
      </Box>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
};

export default Error;
