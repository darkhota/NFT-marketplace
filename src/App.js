import Home from "./components/Home";
import Profile from "./components/Profile";
import CreateNft from "./components/CreateNft";
import Auth from "./Auth";
import { useMoralis } from "react-moralis";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import {
  Container,
  Heading,
  Avatar,
  Flex,
  Spacer,
  Button,
  Center
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";

function App() {
  const {
    authenticate,
    isAuthenticated,
    isAuthUndefined,
    isAuthenticating,
    user,
    logout,
    authError
  } = useMoralis();
  return (
    <div>
      <BrowserRouter>
        <Container maxW="container.xl">
          <Flex my={6}>
            <Link to="/">
              {" "}
              <Heading>Home</Heading>
            </Link>
            <Spacer />
            {isAuthenticated && (
              <Link to="/profile">
                <Avatar name={user.attributes.username} mr="4"></Avatar>
              </Link>
            )}

            <Link to="/create-nft">
              {" "}
              <Button leftIcon={<AddIcon />} mr="4" colorScheme="green">
                Create
              </Button>
            </Link>
            <Button onClick={() => logout()}>Disconnect</Button>
          </Flex>
        </Container>
        <Container maxW="container.xl">
          <Center>
            <Heading mb={6}>Welcome to my nft marketplace</Heading>
          </Center>

          {isAuthenticated ? (
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/profile" exact>
                <Profile />
              </Route>

              <Route path="/create-nft" exact>
                <CreateNft />
              </Route>
            </Switch>
          ) : (
            <>
              {!isAuthUndefined && <Redirect to="/" />}
              <Auth />{" "}
            </>
          )}
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
