    import { getSchedules, putSchedule } from "../database/db";

    function handler(event, context, callback) {
        const date = Date.now();
        const day = date.getDay();
        const hour = date.getHours();
        const minute = date.getMinutes();
        
        const schedules = getSchedules();
        console.log(schedules);
        // find schedule for today and tomorrow
        const schedulesToProgram = schedules.find((schedule) => schedule.day === day);

        schedulesToProgram.forEach(schedule => {
            const { userId, valveId,time, duration, state } = schedule;

            if(state !='waiting'){
                return;
            }
            const [hourScheduled, minuteScheduled] = time.split(':');

            if (hourScheduled === hour && minuteScheduled === minute) {
                checkValve(schedule,1,duration);
            }
        });

    }

    function checkValve(schedule) {

        const start = 1; // 1 for open, 0 for close
    if(start==1){
        schedule.state= 'pending';
        putSchedule(schedule);
    }
    if(start==0){
        schedule.state= 'stopped';
        putSchedule(schedule);
    }
    }   

    export { handler, checkValve as openValve };
