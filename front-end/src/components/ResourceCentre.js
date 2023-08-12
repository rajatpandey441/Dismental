import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ResourceCentre = () => {
  return (
    <>
      <Flex justifyContent={"center"} paddingTop={10}>
        <VStack>
          <Heading as="h3" size="lg">
            Support for life's challenges, big or small
          </Heading>
          <Box paddingTop={7}>
            <Image
              height={185}
              width={600}
              borderRadius={10}
              src="https://bit.ly/2Z4KKcF"
              alt="Rear view of modern home with pool"
            />
          </Box>
          <HStack paddingTop={15}>
            <Box height={225} width={250} textAlign={"left"}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque habitant morbi tristique senectus et netus.
                Adipiscing tristique risus nec feugiat in fermentum posuere.
              </Text>
            </Box>
            <Box height={225} width={250} textAlign={"center"}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque habitant morbi tristique senectus et netus.
                Adipiscing tristique risus nec feugiat in fermentum posuere.
              </Text>
            </Box>
          </HStack>
          <Box
            paddingTop={15}
            height={400}
            width={800}
            backgroundColor={"blue.800"}
          >
            {" "}
          </Box>
        </VStack>
      </Flex>
    </>
  );
};

export default ResourceCentre;
