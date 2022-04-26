import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addNote } from "../api/addNotes";
import useAuth from "../hooks/useAuth";
const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddNote = () => {
    addNote({ uid: user.uid, title, isPublic: false, body });
    navigate("/notes");
  };
  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Add a Note</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </FormControl>

            <FormControl id="body">
              <FormLabel>Body</FormLabel>
              <Textarea
                type="number"
                value={body}
                placeholder={`body`}
                onChange={(e) => setBody(e.target.value)}
                min="1"
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                disabled={!title || !body}
                onClick={() => handleAddNote()}
              >
                Create a Note
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AddNoteForm;
