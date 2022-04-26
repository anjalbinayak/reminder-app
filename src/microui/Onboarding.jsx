import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsAlarm, BsFillCalendarEventFill } from "react-icons/bs";
import { FiFile } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Onboarding() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <RouterLink to="/reminders">
          <StatsCard
            title={"Reminders"}
            stat={"3"}
            icon={<BsAlarm size={"3em"} />}
          />
        </RouterLink>
        <RouterLink to="/events">
          <StatsCard
            title={"Events"}
            stat={"21"}
            icon={<BsFillCalendarEventFill size={"3em"} />}
          />
        </RouterLink>
        <RouterLink to="/notes">
          <StatsCard
            title={"Notes"}
            stat={"7"}
            icon={<FiFile size={"3em"} />}
          />
        </RouterLink>
      </SimpleGrid>
    </Box>
  );
}
