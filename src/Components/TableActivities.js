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
  Box,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { getMiles, getMinutes } from "./../utils/helpers";

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
    <Box
      overflowX="auto"
      className="tableBreak"
      style={{ marginBottom: "40px" }}
    >
      <Table variant="striped" colorScheme="teal">
        <TableCaption placement="top">
          <Text fontSize="xl">
            {month !== undefined ? (
              <Link to={`/montlystats/${id}`}>
                Activities of {monthNames[month]}
              </Link>
            ) : (
              "List of recent activities"
            )}
          </Text>
        </TableCaption>
        <Thead>
          <Tr textAlign="center" w="15%">
            <Th textAlign="center" w="15%">
              Name
            </Th>
            <Th textAlign="center" w="15%">
              Date
            </Th>
            <Th textAlign="center" w="15%" isNumeric>
              Distance (Miles)
            </Th>
            <Th textAlign="center" w="15%" isNumeric>
              Time (Minutes)
            </Th>
            <Th textAlign="center" w="15%" isNumeric>
              Elevation gain
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {activities?.map((activitie, index) => {
            return (
              <Tr textAlign="center" w="15%" key={index}>
                <Td textAlign="center" w="15%">
                  {activitie?.name}
                </Td>
                <Td textAlign="center" w="15%">
                  {dayjs(activitie?.start_date).format("DD/MM/YYYY")}
                </Td>
                <Td textAlign="center" w="15%" isNumeric>
                  {Math.round(getMiles(activitie?.distance))}
                </Td>
                <Td textAlign="center" w="15%" isNumeric>
                  {getMinutes(activitie?.moving_time)}
                </Td>
                <Td textAlign="center" w="15%" isNumeric>
                  {activitie?.total_elevation_gain}
                </Td>
              </Tr>
            );
          })}
        </Tbody>

        <Tfoot>
          <Tr textAlign="center" w="15%">
            <Th textAlign="center" w="15%">
              Name
            </Th>
            <Th textAlign="center" w="15%">
              Date
            </Th>
            <Th textAlign="center" w="15%" isNumeric>
              Distance (Miles)
            </Th>
            <Th textAlign="center" w="15%" isNumeric>
              Time (Minutes)
            </Th>
            <Th textAlign="center" w="15%" isNumeric>
              Elevation gain
            </Th>
          </Tr>
        </Tfoot>
      </Table>
      <hr />
    </Box>
  );
};
