import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getActivities } from './Redux/reducers/activitiesReducer';


export const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {

      // dispatch(getActivities());

  }, [])
  


  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}


