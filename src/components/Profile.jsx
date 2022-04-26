import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { auth } from "../firebase/firebase";

export default function Profile() {
  const { user, isLoggedIn } = useAuth();
  const [buttonClickedCount, setButtonClickedCount] = useState(0);
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate("/");
  };

  useEffect(() => {});
  return (
    <Center py={6}>
      {user && (
        <Box
          maxW={"270px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"120px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit={"cover"}
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={user.photoURL}
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {user.displayName}{" "}
                {buttonClickedCount >= 10 && (
                  <Badge variant="solid" colorScheme="orange">
                    AWESOME
                  </Badge>
                )}
              </Heading>
              <Text color={"gray.500"}>.NET Developer</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>21</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Reminders
                </Text>
              </Stack>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>7</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Notes
                </Text>
              </Stack>
            </Stack>

            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              disabled={buttonClickedCount > 10 ? "disabled" : ""}
              onClick={(e) => {
                setButtonClickedCount(buttonClickedCount + 1);
                e.target.disabled = "true";
                e.target.innerText = "...";
                setTimeout(() => {
                  e.target.innerText = "AFFIRMED";
                }, 1000);

                setTimeout(() => {
                  e.target.disabled = "";
                  e.target.innerText = `AFFIRM: I AM AWESOME (${buttonClickedCount})`;
                }, 4000);
              }}
            >
              AFFIRM: I AM AWESOME ({buttonClickedCount})
            </Button>
            <Button
              w={"full"}
              mt={2}
              bg={useColorModeValue("red.500", "red.500")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              colorScheme={"red"}
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </Box>
        </Box>
      )}
    </Center>
  );
}
