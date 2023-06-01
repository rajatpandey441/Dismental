import { Button, Flex, FormControl, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

const QuestionForm = ({
  question,
  setStep,
  step,
  setProgress,
  totalQuestions,
  onToggle,
}) => {
  const handlePillClick = (selectedId) => {
    console.log(selectedId);
    setStep((prevState) => {
      setProgress(((prevState + 1) / totalQuestions) * 100);
      if (prevState <= totalQuestions - 1) {
        onToggle();
      }
      return prevState <= totalQuestions - 1 ? prevState + 1 : prevState;
    });
    //setProgress();
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        {question.qText}
      </Heading>
      <Flex direction="column" textAlign={"center"}>
        {question.options.map((option) => {
          return (
            <FormControl as={GridItem} colSpan={[6, 3]}>
              <Button
                mt="2%"
                colorScheme="teal"
                variant={"outline"}
                h="1.75rem"
                w={"80"}
                size="lg"
                onClick={() => handlePillClick(option.id)}
              >
                {option.aText}
              </Button>
            </FormControl>
          );
        })}
      </Flex>
    </>
  );
};

export default QuestionForm;
