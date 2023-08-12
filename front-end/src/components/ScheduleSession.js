import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Calender from "./Calender";

const ScheduleSession = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <VStack>
          <Text fontSize="3xl">Schedule a session with your therapist</Text>
          <Calender />
        </VStack>
      </Flex>
    </>
  );
};

export default ScheduleSession;
