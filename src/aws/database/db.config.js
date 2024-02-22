import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-1',
    credentials:
        new AWS.Credentials({
            accessKeyId: "test",
            secretAccessKey: "test"
        })
});
const client = new AWS.DynamoDB.DocumentClient();
const table = 'schedules';

export {
    client,table
}
