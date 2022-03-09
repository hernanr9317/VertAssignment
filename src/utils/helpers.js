import * as dayjs from "dayjs";

const isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

export const getMonth3 = () => {
  const referenceDate = new Date();
  return referenceDate.setDate(1);
};

export const getMonth2 = () => {
  const referenceDate = new Date();
  return referenceDate.setMonth(referenceDate.getMonth() - 1);
};

export const getMonth1 = () => {
  const referenceDate = new Date();
  return referenceDate.setMonth(referenceDate.getMonth() - 2);
};

export const getActivities = (activities, start, end) =>
  activities.filter((activitie) =>
    dayjs(activitie.start_date).isBetween(start, end)
  );

export const getMiles = (i) => {
  return i * 0.000621371192;
};

export const getMinutes = (i) => {
  return i / 60;
};
