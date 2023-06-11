import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const SignUpForm = () => {
  const [show, setShow] = React.useState(false);
  const [username, setUserName] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  //spinner will appear when api call is in progress
  const [unameApiSpinner, setUnameApiSpinner] = useState(false);
  const [isUnamexist, seIisUnamexist] = useState(false);
  const handleClick = () => setShow(!show); // handling password show button
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const unameRef = useRef();
  const handleSubmit = (event) => {
    //TODO: Call server to create user
    event.preventDefault();
    console.log(emailRef.current.validationMessage);
    if (checkValidation()) {
      console.log("got all correct");
      const userToCreate = {
        name: fnameRef.current.value + " " + lnameRef.current.value,
        password: pwdRef.current.value,
        email: emailRef.current.value,
        username: username,
        registeredRole: "USER",
      };
      axios
        .post("/auth/register", userToCreate)
        .then((response) => {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          console.log("err ", err);
        });
    }
  };
  const checkValidation = () => {
    let fnameValid = false;
    let lnameValid = false;
    let unameValid = false;
    let emailValid = false;
    let pwdValid = false;
    if (!fnameRef.current.validity.valid) {
      fnameRef.current.style.borderColor = "red";
      fnameRef.current.title = fnameRef.current.validationMessage;
      fnameRef.current.focus();
    } else {
      fnameRef.current.style.borderColor = "rgb(203, 213, 224)";
      //emailRef.current.style.border = "";
      fnameRef.current.title = "";
      fnameRef.current.blur();
      fnameValid = true;
    }

    if (!lnameRef.current.validity.valid) {
      lnameRef.current.style.borderColor = "red";
      lnameRef.current.title = lnameRef.current.validationMessage;
      lnameRef.current.focus();
    } else {
      lnameRef.current.style.borderColor = "rgb(203, 213, 224)";
      //emailRef.current.style.border = "";
      lnameRef.current.title = "";
      lnameRef.current.blur();
      lnameValid = true;
    }

    if (!unameRef.current.validity.valid || isUnamexist) {
      unameRef.current.style.borderColor = "red";
      unameRef.current.title = isUnamexist
        ? "Username already exists"
        : unameRef.current.validationMessage;
      unameRef.current.focus();
    } else {
      unameRef.current.style.borderColor = "rgb(203, 213, 224)";
      //emailRef.current.style.border = "";
      unameRef.current.title = "";
      unameRef.current.blur();
      unameValid = true;
    }

    if (!emailRef.current.validity.valid) {
      emailRef.current.style.borderColor = "red";
      emailRef.current.title = emailRef.current.validationMessage;
      emailRef.current.focus();
    } else {
      emailRef.current.style.borderColor = "rgb(203, 213, 224)";
      //emailRef.current.style.border = "";
      emailRef.current.title = "";
      emailRef.current.blur();
      emailValid = true;
    }

    if (!pwdRef.current.validity.valid) {
      pwdRef.current.style.borderColor = "red";
      pwdRef.current.title = pwdRef.current.validationMessage;
      pwdRef.current.focus();
    } else {
      pwdRef.current.style.borderColor = "rgb(203, 213, 224)";
      //emailRef.current.style.border = "";
      pwdRef.current.title = "";
      pwdRef.current.blur();
      pwdValid = true;
    }
    return (
      fnameValid &&
      lnameValid &&
      unameValid &&
      emailValid &&
      pwdValid &&
      !unameApiSpinner
    );
  };

  useEffect(() => {
    const checkUserNameExistence = async () => {
      const apiResponse = await axios.get(
        `/auth/checkUserNameExistence?username=${username}`
      );
      console.log(apiResponse.data);
      seIisUnamexist(apiResponse.data);
      setUnameApiSpinner(false);
    };

    const timer = setTimeout(() => {
      checkUserNameExistence();
    }, 3000);

    return () => clearTimeout(timer);
  }, [username]);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            ref={fnameRef}
            placeholder="First name"
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            ref={lnameRef}
            placeholder="Last name"
            required
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Username
        </FormLabel>
        <Flex>
          <Input
            id="username"
            ref={unameRef}
            placeholder="Choose a unique username"
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
              setUnameApiSpinner(true);
            }}
            required
          />
          {username && username.length > 0 && unameApiSpinner && (
            <Spinner m={2} />
          )}
          {username &&
            username.length > 0 &&
            !unameApiSpinner &&
            (isUnamexist ? (
              <Tooltip label="Username already exists" fontSize="md" m={3}>
                <CloseIcon m={2} color={"red"} />
              </Tooltip>
            ) : (
              <Tooltip label="Username available" fontSize="md" m={3}>
                <CheckIcon m={2} color={"green.600"} />
              </Tooltip>
            ))}
        </Flex>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input id="email" ref={emailRef} type="email" required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            ref={pwdRef}
            required
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <br />
      <Flex justifyContent={"flex-end"}>
        <Button
          w="7rem"
          colorScheme="red"
          variant="solid"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default SignUpForm;
