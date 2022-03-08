import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export const TableActivities = ({ activities }) => {
  return (
    <>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
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
          {activities.map((activitie, index) => {
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

          {/* <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>  */}
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};
