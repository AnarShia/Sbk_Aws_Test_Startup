import React from 'react';
import './App.css';
import CreateSchedule from './components/CreateSchedule';
import ScheduleTables from './components/ScheduleTables';

function App() {

  return (
    <div className="App">
      <CreateSchedule />
      {/* <ValveScheduleInput /> */}
      <ScheduleTables />
    </div>
  );
}

export default App;
