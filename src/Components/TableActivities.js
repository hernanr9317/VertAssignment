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

export const TableActivities = ({ activities, month }) => {
  return (
    <>
      <Table variant="striped" colorScheme="teal" width="200px">
        <TableCaption placement="top">
          <Text fontSize="xl">{ month ? `Activities of ${month}` : "List of recent activities" }</Text>
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
