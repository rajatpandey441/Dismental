import React from "react";
import Header from "./Header";
import { headerData } from "../utils/constants/headerData";
import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Header data={headerData} />
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            We are there to hold your hand and help you to{" "}
            <Text as={"span"} color={"orange.400"}>
              find happiness
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            What type of therapy are you looking for?
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              p={25}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Individual{<br />}(For Myself)
            </Button>
            <Button rounded={"full"} p={25}>
              Couple{<br />}(For me and partner)
            </Button>
            <Button rounded={"full"} p={25}>
              Kid{<br />}(For my child)
            </Button>
          </Stack>
          <Flex w={"full"}>Placeholder</Flex>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
