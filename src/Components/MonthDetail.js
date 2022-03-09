import { useParams } from "react-router-dom";
import { TableActivities } from "./TableActivities";
import {
  getMonth3,
  getMonth2,
  getMonth1,
  getActivities,
  getMiles,
  getMinutes
} from "./../utils/helpers";
import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BasicStatistics } from "./BasicStatistics";

export const MonthDetail = () => {
  const { monthId } = useParams();

  const { data } = useSelector((state) => state.activities);

  const activities = data;

  const [actDetail, setActDetail] = useState(null);

  const month3 = getMonth3();

  const month2 = getMonth2();

  const [totalDistance, setTotalDistance] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const [totalElevation, setTotalElevation] = useState(0)

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

  useEffect(() => {
   
    let totalDistance=0;
    let totaTime=0;
    let totalElevation=0;

    for(let i = 0; i <= actDetail?.length; i++) {
      totalDistance+= (actDetail[i]?.distance !== undefined) ? actDetail[i]?.distance : 0;
      totaTime+= (actDetail[i]?.moving_time !== undefined) ? actDetail[i]?.moving_time : 0;
      totalElevation+= (actDetail[i]?.total_elevation_gain !== undefined) ? actDetail[i]?.total_elevation_gain : 0;
    }
    setTotalDistance( Math.round(getMiles(totalDistance)) )
    setTotalTime(getMinutes(totaTime))
    setTotalElevation(totalElevation)

  }, [actDetail])
  

  return (
    <Container
      maxW="container.xl"
      centerContent
      className="animate__animated animate__fadeIn"
    >
      <TableActivities activities={actDetail} month={monthId} id={monthId} />
   
      <BasicStatistics distance={totalDistance} time={totalTime} elevation={totalElevation}/>

    </Container>
  );
};
