import { mock } from "./mock";
import * as dayjs from "dayjs";
import { SimpleGrid } from "@chakra-ui/react";
import { TableActivities } from "./TableActivities";
import {
  getActivities,
  getMonth1,
  getMonth2,
  getMonth3,
} from "../utils/helpers";

export const MontlyStatsScreen = ({ activities = mock }) => {
  const month3 = getMonth3();

  const month2 = getMonth2();

  const month1 = getMonth1();

  const activities3 = getActivities(activities, month3, dayjs());

  const activities2 = getActivities(activities, month2, month3);

  const activities1 = getActivities(activities, month1, month2);


  return (
    <>
      <SimpleGrid minChildWidth="550px" spacing="40px">
        <TableActivities
          activities={activities3}
          month={dayjs(activities3[0].start_date).month()}
          id={dayjs(activities3[0].start_date).month()}
        />

        <TableActivities
          activities={activities2}
          month={dayjs(activities2[0].start_date).month()}
          id={dayjs(activities2[0].start_date).month()}
        />

        <TableActivities
          activities={activities1}
          month={dayjs(activities1[0].start_date).month()}
          id={dayjs(activities1[0].start_date).month()}
        />
      </SimpleGrid>
    </>
  );
};
