import { Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { NavbarUi } from "./Components/NavbarUi";
import { getActivities } from "./Redux/reducers/activitiesReducer";
import { AppRouter } from "./router/AppRoputer";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getActivities());
  }, []);

  return (
    <BrowserRouter>
      <NavbarUi />
      <AppRouter />
    </BrowserRouter>
  );
};
