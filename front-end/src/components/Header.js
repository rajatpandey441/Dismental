import { Image, Flex, Button, HStack, chakra } from "@chakra-ui/react";
import Logo from "../logo.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useRef } from "react";
import MobileDrawer from "./MobileDrawer";
import Login from "./Login";
import AuthContext from "./shared/AuthContext";

const CTA = "Login";

export default function Header({ data }) {
  const { user, logout } = useContext(AuthContext);
  const loginCompRef = useRef();
  const navigate = useNavigate();
  return (
    <>
      <chakra.header id="header">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <Link to={"/"}>
            <Image src={Logo} h="50px" />
          </Link>
          <HStack display={{ base: "none", md: "flex" }} as="nav" spacing="5">
            {data.map((item, i) => (
              <Link key={i} to={item.link}>
                <Button variant="nav"> {item.label} </Button>
              </Link>
            ))}
          </HStack>

          <HStack>
            {user ? (
              <Button
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Profile
              </Button>
            ) : (
              <Button onClick={() => loginCompRef.current.onOpen()}>
                {CTA}
              </Button>
            )}

            {user ? (
              <Button
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            ) : (
              <Link to="/signup">
                <Button>SignUp</Button>
              </Link>
            )}

            <MobileDrawer data={data} />
          </HStack>
        </Flex>
      </chakra.header>
      <Login ref={loginCompRef} />
    </>
  );
}
