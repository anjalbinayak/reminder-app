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
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addReminder } from "../api/addReminder";
import useAuth from "../hooks/useAuth";

export default function AddReminderForm() {
  const [title, setTitle] = useState("");
  const [dateOfReminder, setDateOfReminder] = useState("");
  const [remindBefore, setRemindBefore] = useState(1);

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleReminderAdd = () => {
    addReminder({
      uid: user.uid,
      title,
      date: dateOfReminder,

      remindBefore,
    });

    navigate("/reminders");
  };
  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Add an Event</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </FormControl>
            <FormControl id="date">
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                placeholder="Date"
                value={dateOfReminder}
                onChange={(e) => setDateOfReminder(e.target.value)}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Remind Before</FormLabel>
              <Input
                type="number"
                value={remindBefore}
                placeholder={`Remind before __ days`}
                onChange={(e) => setRemindBefore(e.target.value)}
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
                disabled={!dateOfReminder}
                onClick={() => handleReminderAdd()}
              >
                Create Reminder
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
