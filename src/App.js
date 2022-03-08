import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getActivities } from './Redux/reducers/activitiesReducer';
import { AppRouter } from './router/AppRoputer';



export const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {

      // dispatch(getActivities());

  }, [])
  

  return (
    <>
      <AppRouter />
    </>
  );
}


