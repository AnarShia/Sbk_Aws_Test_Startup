import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ValveScheduleInput() {
  const [date, setDate] = useState(new Date());
  const [valveID, setValveID] = useState('');
  const [action, setAction] = useState('');
  const [time, setTime] = useState('');
  const [valveSchedules, setValveSchedules] = useState([]);

  const handleAddSchedule = () => {
    const schedule = `${date.toDateString()}, ${valveID}, ${action}, ${time}`;
    setValveSchedules([...valveSchedules, schedule]);
    // Clear input fields after adding schedule
    setValveID('');
    setAction('');
    setTime('');
  };

  return (
    <div>
      <h2>Valve Schedule Input</h2>
      <Calendar onChange={setDate} value={date} />
      <input
        type="text"
        placeholder="Valve ID"
        value={valveID}
        onChange={(e) => setValveID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Action"
        value={action}
        onChange={(e) => setAction(e.target.value)}
      />
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleAddSchedule}>Add Schedule</button>
      <ul>
        {valveSchedules.map((schedule, index) => (
          <li key={index}>{schedule}</li>
        ))}
      </ul>
    </div>
  );
}

export default ValveScheduleInput;
