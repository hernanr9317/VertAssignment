import React, { useEffect } from 'react';
import './App.css';
import { getActivities, refreshAuth } from './utils/axiosApi';

function App() {


  useEffect(() => {

    // getActivities();
    // refreshAuth();

  }, [])
  


  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default App;
