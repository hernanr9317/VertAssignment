import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarUi } from "../Components/NavbarUi";
import { ActivitiesScreen } from "./../Components/ActivitiesScreen";
import { MontlyStatsScreen } from "./../Components/MontlyStatsScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavbarUi />

      <Routes>
        <Route path="/" element={<ActivitiesScreen />} />
        <Route path="/montlyStats" element={<MontlyStatsScreen />} />

        <Route path="*" element={<ActivitiesScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
