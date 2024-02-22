import {client,table} from './db.config.js';

 const getSchedule = async (id) => {
    const params = {
        TableName: table,
        Key: {
            id,
        },
    };
    try {
        const data = await client.get(params).promise();
        return data.Item;
    } catch (err) {
        console.log('DynamoDB error: ', err);
        return null;
    }

}

const getSchedules = async () => {
    const params = {
        TableName: table,
    };
    try {
        const data = await client.scan(params).promise();
        return data.Items;
    } catch (err) {
        console.log('DynamoDB error: ', err);
        return null;
    }
}


 const putSchedule = async (schedule) => {
    const params = {
        TableName: table,
        Item: schedule,
    };
    try {
        await client.put(params).promise();
        console.log('Schedule created');
        return schedule;
    } catch (err) {
        console.log('DynamoDB error: ', err);
        return null;
    }
}
const deleteSchedule = async (id) => {
    const params = {
        TableName: table,
        Key: {
            id,
        },
    };
    try {
        await client.delete(params).promise();
        return id;
    } catch (err) {
        console.log('DynamoDB error: ', err);
        return null;ac
    }
}


export {
    getSchedule,
    getSchedules,
    putSchedule,
    deleteSchedule
}