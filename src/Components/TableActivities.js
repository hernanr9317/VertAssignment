import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const TableActivities = ({ activities, month, id }) => {

  const monthNames = [
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


  return (
    <>
      <Table variant="striped" colorScheme="teal" width="200px">
        <TableCaption placement="top">
          <Text fontSize="xl">
            {month!==undefined ? <Link to={`/montlystats/${id}`}>Activities of {monthNames[month]}</Link> : "List of recent activities"}
          </Text>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th isNumeric>Distance</Th>
            <Th isNumeric>Time (Seconds)</Th>
            <Th isNumeric>Elevation gain</Th>
          </Tr>
        </Thead>

        <Tbody>
          {activities?.map((activitie, index) => {
            return (
              <Tr key={index}>
                <Td>{activitie.name}</Td>
                <Td>{activitie.start_date}</Td>
                <Td isNumeric>{activitie.distance}</Td>
                <Td isNumeric>{activitie.moving_time}</Td>
                <Td isNumeric>{activitie.total_elevation_gain}</Td>
              </Tr>
            );
          })}
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th isNumeric>Distance</Th>
            <Th isNumeric>Time (Seconds)</Th>
            <Th isNumeric>Elevation gain</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};
