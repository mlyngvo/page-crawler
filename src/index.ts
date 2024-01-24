import cron from 'node-cron';
import express from 'express';

cron.schedule('* * * * * *', () => {
    console.log('running a task every second');
});

const app = express();
const port = 5000;

app.get('/', (request, response) => {
    response.json('OK');
});

app.listen(port, () => {
    console.info(`App started on port ${port}.`);
});