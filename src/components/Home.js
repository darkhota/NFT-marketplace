import React from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import {
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
  Box,
  Image,
  Badge,
  Stack,
  Flex,
  Spacer,
  Button,
  Grid, GridItem
} from "@chakra-ui/react";
import { StarIcon, SearchIcon } from "@chakra-ui/icons";
const Home = ({ keyword, SetKeyword }) => {
  const { data, error, isLoading } = useMoralisQuery("GameScore");

  // console.log(data.[19].attributes.NftImageipfs);
  const BarStyling = {
    width: "100%",
    background: "#2D3748",
    border: "none"
  };

  const BoxStyle = {
    display: 'flex !important'
  }
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    logout,
    authError
  } = useMoralis();

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "house collection 1",
    formattedPrice: "1.2 ETH",
    reviewCount: 34,
    rating: 4
  };

  return (
    <div>
      <Stack spacing={6}>
        <Container>
          <Center>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                style={BarStyling}
                key="random1"
                value={keyword}
                placeholder="search market"
                onChange={e => SetKeyword(e.target.value)}
              />
            </InputGroup>
          </Center>
        </Container>

        <Container maxW="container.xl">
          <Grid templateColumns="repeat(3, 1fr)" gap={2}>
            {data.map((attributes, i) => (
              <Box
                maxW="sm"
                w="80%"
                borderWidth="1px"
                borderRadius="lg"
                borderColor="teal"
                overflow="hidden"
                key={i}
                mb="5"
                
                
              >
                <Box h='400' p ='4' display="inline-flex" borderColor="teal">
                <Center  >
                <Image overflow="hidden"  borderRadius="lg"  width="90%" src={data.[i].attributes.NftImageipfs} alt={property.imageAlt}  />
                </Center>
                </Box>

                <Box p="6" bg="#1A202C">
                  <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {data.[i].attributes.nftname}
                  </Box>

                  <Box>
                  {data.[i].attributes.price} eth
                    <Box color="gray.600" fontSize="sm">
                      {attributes.nftname}
                    </Box>
                  </Box>

                  <Box d="flex" mt="1" alignItems="center">
                    {Array(1)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount}
                    </Box>
                  </Box>
                  <Box mt="1">

                    <Center>
                    <Button variant="outline" colorScheme="green">Bid</Button>
                    </Center>
                  </Box>
                </Box>
              </Box>
            
            ))}
           
          </Grid>
        </Container>
      </Stack>
    </div>
  );
};

export default Home;
