import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from '../Redux/reducers/activitiesReducer';


export const store = configureStore({
  reducer: {
    activities: activitiesReducer
  },
});
