import { Routes, Route } from "react-router-dom";
import { ActivitiesScreen } from "./../Components/ActivitiesScreen";
import { MontlyStatsScreen } from "./../Components/MontlyStatsScreen";
import { MonthDetail } from "./../Components/MonthDetail";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ActivitiesScreen />} />
        <Route path="/montlystats" element={<MontlyStatsScreen />} />
        <Route path="/montlystats/:monthId" element={<MonthDetail />} />

        <Route path="*" element={<ActivitiesScreen />} />
      </Routes>
    </>
  );
};
