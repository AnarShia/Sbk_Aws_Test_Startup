import {putSchedule} from '../aws/database/db';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const CreateSchedule = () => {
    const [schedule, setSchedule] = useState({
        userId: uuidv4(),
        valve: '',
        day: '',
        time: '',
        duration: 10,
    });

    const handleChange = (e) => {
        setSchedule({ ...schedule, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        schedule.state= 'waiting';
        await putSchedule(schedule);
        setSchedule({
            userId: uuidv4(),
            valve: '',
            day: '',
            time: '',
            duration: 10,
        });

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Valve:
                    <input
                        type="text"
                        name="valve"
                        value={schedule.valve}
                        onChange={handleChange}
                    />
                </label>
                <label>
                Day:
                    <input
                        type="date"
                        name="day"
                        value={schedule.day}
                        onChange={handleChange}
                    />
                </label>
                <label>
                Time:
                    <input
                        type="time"
                        name="time"
                        value={schedule.time}
                        onChange={handleChange}
                    />
                </label>
                <label>
                Duration:
                    <input
                        type="number"
                        name="duration"
                        value={schedule.duration}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Create Schedule</button>
            </form>
        </div>
    );
}

export default CreateSchedule;



