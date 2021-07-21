import React, { useState } from "react";
import Error from "./Error";
import { useMoralis } from "react-moralis";
import {
  Button,
  Input,
  Box,
  Text,
  Stack,
  Heading,
  Container
} from "@chakra-ui/react";

const Profile = () => {
  const { user, setUserData, userError, isUserUpdating } = useMoralis();
  const [username, setUsername] = useState(user.attributes.username);
  const [email, setEmail] = useState(user.attributes.email);
  const [avi, setAvi] = useState(user.attributes.avi);
  const [avatar, setAvatar] = useState("");

  const InputStyling = {
    background: "#2D3748"
  };

  const handleSave = () => {
    setUserData({
      username,
      email,
      avi
    });
  };
  return (
    <Container>
      <Box>
        <Stack spacing={3}>
          {userError && (
            <Error title="profile update failed" message={userError.message} />
          )}
          <Box>
            <Text>UserName</Text>
            <Input
              value={username}
              onChange={event => setUsername(event.currentTarget.value)}
            />
          </Box>
          <Box>
            <Text>Email</Text>
            <Input
              value={email}
              onChange={event => setEmail(event.currentTarget.value)}
            />
          </Box>

          <Button onClick={handleSave} isLoading={isUserUpdating}>
            Save Changes
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Profile;
