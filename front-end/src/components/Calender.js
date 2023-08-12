import {
  Box,
  Flex,
  HStack,
  Select,
  Tab,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Calender = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentMonth, setCurrentMonth] = useState(
    months[new Date().getMonth()]
  );
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const getFirstDay = (year, month) => {
    const firstDay = new Date(year, month, 1);
    return firstDay.getDay();
  };
  const getNumberOfDays = (year, month) => {
    const date = new Date(year, month, 1);
    //increment the month
    date.setMonth(date.getMonth() + 1);
    //Setting date to 0 takes the date to last day of previous month
    date.setDate(0);

    return date.getDate();
  };
  const handleForwardIcon = () => {
    if (months.indexOf(currentMonth) === 11) {
      setCurrentYear(
        new Date(currentYear).setFullYear(currentYear + 1).getFullYear()
      );
      console.log("hello " + currentYear);
      setCurrentMonth(months[0]);
    } else {
      setCurrentMonth(months[months.indexOf(currentMonth) + 1]);
    }
  };
  const handleBackIcon = () => {
    setCurrentMonth(months[months.indexOf(currentMonth) - 1]);
  };

  const getCalenderBody = () => {
    let currentDay = 1;
    let rows = [];
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        let rowLocal = [];
        for (let j = 0; j < 7; j++) {
          if (j < getFirstDay(currentYear, months.indexOf(currentMonth))) {
            rowLocal.push(<Td> </Td>);
          } else {
            rowLocal.push(<Td>{currentDay++}</Td>);
          }
        }
        let finalRow = <Tr>{rowLocal}</Tr>;
        rows.push(finalRow);
      } else {
        let rowLocal = [];
        for (let j = 0; j < 7; j++) {
          if (
            currentDay <=
            getNumberOfDays(currentYear, months.indexOf(currentMonth))
          )
            rowLocal.push(<Td>{currentDay++}</Td>);
          else rowLocal.push(<Td> </Td>);
        }

        let finalRow = <Tr>{rowLocal}</Tr>;
        rows.push(finalRow);
      }
    }
    return rows;
  };

  return (
    <>
      <Box
        w={"fit-content"}
        h={"fit-content"}
        border={"solid 1px blue"}
        marginTop={"1.5rem !important"}
      >
        <Flex
          justifyContent={"space-between"}
          paddingTop={2}
          paddingLeft={1.5}
          paddingRight={1.5}
        >
          <ArrowBackIcon
            boxSize={"2em"}
            paddingTop={1.8}
            onClick={handleBackIcon}
          />
          <Text paddingTop={2.3}>{currentMonth}</Text>
          <Select
            w={"5.5em"}
            onChange={(e) => {
              setCurrentYear(e.target.value);
            }}
            defaultValue={currentYear}
          >
            <option value={new Date().getFullYear()}>
              {new Date().getFullYear()}
            </option>
            <option value={new Date().getFullYear() + 1}>
              {new Date().getFullYear() + 1}
            </option>
            <option value={new Date().getFullYear() + 2}>
              {new Date().getFullYear() + 2}
            </option>
          </Select>
          <ArrowForwardIcon
            boxSize={"2em"}
            paddingTop={1.8}
            onClick={handleForwardIcon}
          />
        </Flex>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Su</Th>
                <Th>Mo</Th>
                <Th>Tu</Th>
                <Th>We</Th>
                <Th>Th</Th>
                <Th>Fr</Th>
                <Th>Sa</Th>
              </Tr>
            </Thead>
            <Tbody>{getCalenderBody()}</Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Calender;
