import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { FooterS } from "./Components/FooterS";
import { NavbarUi } from "./Components/NavbarUi";
import { getActivities } from "./Redux/reducers/activitiesReducer";
import { AppRouter } from "./router/AppRoputer";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <BrowserRouter>
      <NavbarUi />
      <AppRouter />
      <FooterS />
    </BrowserRouter>
  );
};
