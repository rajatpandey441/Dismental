import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  InputRightElement,
  useDisclosure,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import AuthContext from "./shared/AuthContext";

const Login = forwardRef((props, ref) => {
  //hook for calling method from parent to child
  useImperativeHandle(ref, () => ({
    onOpen,
  }));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleShowClick = () => setShow(!show);

  const usernameRef = useRef(null);
  const pwdRef = useRef(null);
  const { login, logout } = useContext(AuthContext);

  const loginSubmit = async () => {
    let payload = {
      username: usernameRef.current.value,
      password: pwdRef.current.value,
    };
    console.log(usernameRef.current.value);
    console.log(pwdRef.current.value);
    await login(payload);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Happiness is waiting for you!</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input ref={usernameRef} placeholder="Username" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                ref={pwdRef}
                placeholder="Password"
                type={show ? "text" : "password"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={loginSubmit}>
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

export default Login;
