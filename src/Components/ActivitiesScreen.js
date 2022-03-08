import { Container } from "@chakra-ui/react";
import { TableActivities } from "./TableActivities";
import { mock } from './mock';

export const ActivitiesScreen = () => {
  return (
    <>
      <TableActivities activities={mock}/>
    </>
  );
};
