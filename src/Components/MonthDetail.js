import { useParams } from "react-router-dom";
import { TableActivities } from "./TableActivities";
import {
  getMonth3,
  getMonth2,
  getMonth1,
  getActivities,
} from "./../utils/helpers";
import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const MonthDetail = () => {
  const { monthId } = useParams();

  const { data } = useSelector((state) => state.activities);

  const activities = data;

  const [actDetail, setActDetail] = useState(null);

  const month3 = getMonth3();

  const month2 = getMonth2();

  useEffect(() => {
    let month;

    switch (monthId) {
      case "2":
        month = getMonth3();
        setActDetail(getActivities(activities, month, dayjs()));
        break;
      case "1":
        month = getMonth2();
        setActDetail(getActivities(activities, month, month3));
        break;
      case "0":
        month = getMonth1();
        setActDetail(getActivities(activities, month, month2));
        break;

      default:
        break;
    }
  }, [activities]);

  return (
    <Container
      maxW="container.xl"
      centerContent
      className="animate__animated animate__fadeIn"
    >
      <TableActivities activities={actDetail} month={monthId} id={monthId} />
    </Container>
  );
};
