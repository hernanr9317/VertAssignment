import { mock } from "./mock";
import * as dayjs from "dayjs";
import { SimpleGrid } from "@chakra-ui/react";
import { TableActivities } from "./TableActivities";

export const MontlyStatsScreen = ({ activities = mock }) => {
  const isBetween = require("dayjs/plugin/isBetween");
  dayjs.extend(isBetween);

  const referenceDate = new Date();

  const month3 = referenceDate.setDate(1);

  const month2 = referenceDate.setMonth(referenceDate.getMonth() - 1);

  const month1 = referenceDate.setMonth(referenceDate.getMonth() - 2);

  const activities3 = activities.filter((activitie) =>
    dayjs(activitie.start_date).isBetween(month3, dayjs())
  );

  const activities2 = activities.filter((activitie) =>
    dayjs(activitie.start_date).isBetween(month2, month3)
  );

  const activities1 = activities.filter((activitie) =>
    dayjs(activitie.start_date).isBetween(month1, month2)
  );

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
      <SimpleGrid minChildWidth="550px" spacing="40px">
        <TableActivities
          activities={activities3}
          month={monthNames[dayjs(activities3[0].start_date).month()]}
        />

        <TableActivities
          activities={activities2}
          month={monthNames[dayjs(activities2[0].start_date).month()]}
        />

        <TableActivities
          activities={activities1}
          month={monthNames[dayjs(activities1[0].start_date).month()]}
        />
      </SimpleGrid>
    </>
  );
};
