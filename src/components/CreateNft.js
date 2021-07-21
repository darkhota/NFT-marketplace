import React, { useState } from "react";
import Error from "./Error";
import { useMoralis, useMoralisFile, useNewMoralisObject } from "react-moralis";
import {
  Button,
  Input,
  Box,
  Text,
  Textarea,
  Stack,
  Heading,
  Container,
  Select
} from "@chakra-ui/react";

const CreateNft = () => {
  const { user, setUserData, userError, isUserUpdating } = useMoralis();
  const { error, isUploading, moralisFile, saveFile } = useMoralisFile();
  const [nftname, setNftname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [nftImg, setNftImg] = useState("");
  // const [file, setFile] = useState("");

  const InputStyling = {
    background: "#2D3748"
  };

  const { isSaving, save } = useNewMoralisObject("GameScore");

  const handleChange = event => {
    if (event.currentTarget.files) {
      setNftImg(event.currentTarget.files[0]);
    }
  };

  // const NftImagehash = moralisFile.hash();
  // const NftImageipfs = moralisFile.ipfs();
  const handleSave = () => {
    if (nftImg) {
      saveFile("nftImg", nftImg, {
        saveIPFS: true
      });
    }
    // console.log(moralisFile.hash());

    save({
      nftname,
      description,
      price,
      status,
      moralisFile,
      NftImagehash: moralisFile.hash(),
      NftImageipfs: moralisFile.ipfs(),
      nftImg
    });
    console.log(save);
  };
  return (
    <Container>
      <Box>
        <Stack spacing={3}>
          {error && <Error title="NFT upload failed" message={error.message} />}
          <Box>
            <Text>Name</Text>
            <Input
              style={InputStyling}
              onChange={event => setNftname(event.currentTarget.value)}
            />
          </Box>
          <Box>
            <Text>Description</Text>
            <Textarea
              style={InputStyling}
              onChange={event => setDescription(event.currentTarget.value)}
            />
          </Box>

          <Box>
            <Text>Price</Text>
            <Input
              type="number"
              style={InputStyling}
              onChange={event => setPrice(event.currentTarget.value)}
            />
          </Box>

          <Box>
            <Text>Status</Text>
            <Select
              placeholder="Select option"
              style={InputStyling}
              onChange={event => setStatus(event.currentTarget.value)}
            >
              <option value="option1">Open for bid</option>
              <option value="option2">Not for sale</option>
            </Select>
          </Box>

          <Box>
            <Text>Upload NFT File</Text>
            <Input
              style={InputStyling}
              accept=".jpeg"
              type="file"
              onChange={handleChange}
            />
          </Box>

          <Button
            onClick={handleSave}
            isLoading={isUserUpdating}
            mt="5"
            colorScheme="green"
          >
            Create NFT
          </Button>

          {JSON.stringify(
            {
              error,
              isUploading,
              moralisFile,
              hash: moralisFile ? moralisFile.hash() : null,
              ipfs: moralisFile ? moralisFile.ipfs() : null
            },
            null,
            2
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default CreateNft;
