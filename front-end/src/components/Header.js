import { Image, Flex, Button, HStack, chakra } from "@chakra-ui/react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import MobileDrawer from "./MobileDrawer";
import Login from "./Login";

const CTA = "Login";

export default function Header({ data }) {
  const loginCompRef = useRef();
  return (
    <>
      <chakra.header id="header">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <Image src={Logo} h="50px" />

          <HStack display={{ base: "none", md: "flex" }} as="nav" spacing="5">
            {data.map((item, i) => (
              <Link key={i} to={item.link}>
                <Button variant="nav"> {item.label} </Button>
              </Link>
            ))}
          </HStack>

          <HStack>
            <Button onClick={() => loginCompRef.current.onOpen()}>{CTA}</Button>
            <Button>
              <Link to="/signup">SignUp</Link>
            </Button>
            <MobileDrawer data={data} />
          </HStack>
        </Flex>
      </chakra.header>
      <Login ref={loginCompRef} />
    </>
  );
}
