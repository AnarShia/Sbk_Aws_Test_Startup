import { getSchedules } from "../aws/database/db";
import { useEffect, useState } from "react";

const ScheduleTables = () => {
    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        const fetchSchedules = async () => {
        const data = await getSchedules();
        setSchedules(data);
        };
        fetchSchedules();
    }, []);
    return (
        <div>
        <h1>Schedules</h1>
        <table>
            <thead>
            <tr>
                <th>User</th>
                <th>Day</th>
                <th>Valve</th>
                <th>Duration</th>
            </tr>
            </thead>
            <tbody>
            {schedules.map((schedule) => (
                <tr key={schedule.userId}>
                <td>{schedule.userId}</td>
                <td>{schedule.day}</td>
                <td>{schedule.valve}</td>
                <td>{schedule.duration}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

export default ScheduleTables;
