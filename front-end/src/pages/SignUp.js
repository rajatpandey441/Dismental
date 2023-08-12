import React, { useEffect, useState } from "react";
import { headerData } from "../utils/constants/headerData";
import Header from "../components/Header";
import QuestionForm from "../components/QuestionForm";
import {
  Box,
  Heading,
  Progress,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import SignUpForm from "../components/SignUpForm";

const GetStarted = () => {
  const [step, setStep] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    if (isOpen === false) onToggle();
  }, [isOpen]);
  const questions = [
    {
      id: 1,
      qText: "How you doing?",
      options: [
        { id: 1, aText: "Amazing" },
        { id: 2, aText: "Fine" },
        { id: 3, aText: "Bad" },
      ],
    },
    {
      id: 2,
      qText: "How was your day?",
      options: [
        { id: 1, aText: "Super Se Bhi Upar" },
        { id: 2, aText: "Duper" },
        { id: 3, aText: "Super" },
      ],
    },
    {
      id: 3,
      qText: "How often you feel confident?",
      options: [
        { id: 1, aText: "Everytime" },
        { id: 2, aText: "Sometimes" },
        { id: 3, aText: "Never" },
      ],
    },
  ];
  const [progress, setProgress] = useState((step / questions.length) * 100);

  return (
    <>
      <Header data={headerData} />
      <br />
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
        size="lg"
      >
        Answer following questions to help us match you with right therapist and
        support content
      </Heading>
      <br />
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={500}
          p={6}
          m="10px auto"
          as="form"
        >
          <Progress
            hasStripe
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated
          ></Progress>
          {step < questions.length ? (
            <QuestionForm
              question={questions[step]}
              setStep={setStep}
              step={step}
              setProgress={setProgress}
              totalQuestions={questions.length}
              onToggle={onToggle}
            />
          ) : (
            <SignUpForm />
          )}
        </Box>
      </ScaleFade>
    </>
  );
};

export default GetStarted;
