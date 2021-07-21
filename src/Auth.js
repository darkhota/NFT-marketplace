import React from "react";
import { useMoralis } from "react-moralis";
import Error from "./components/Error";
import {
  Button,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton
} from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";

const Auth = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    logout,
    authError
  } = useMoralis();
  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome to my marketplace</Heading>
        <Button onClick={() => logout()}>Logout</Button>
      </Container>
    );
  }
  return (
    <Container>
      {authError && <Error title="login failed" message={authError.message} />}
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        authenticate
      </Button>
    </Container>
  );
};

export default Auth;
