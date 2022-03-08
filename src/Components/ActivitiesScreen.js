import { Container } from "@chakra-ui/react";
import { TableActivities } from "./TableActivities";
import { mock } from './mock';

export const ActivitiesScreen = () => {
  return (
    <Container>
      <h1>Activities</h1>
      <TableActivities activities={mock}/>
    </Container>
  );
};
