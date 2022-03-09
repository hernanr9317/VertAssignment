import { Container } from "@chakra-ui/react";
import { TableActivities } from "./TableActivities";
import { useSelector } from "react-redux";

export const ActivitiesScreen = () => {

  const {data} = useSelector( state => state.activities );

  return (
    <Container maxW="xl" centerContent>
      <TableActivities activities={data} />
    </Container>
  );
};
