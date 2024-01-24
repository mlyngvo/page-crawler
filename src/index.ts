import cron from 'node-cron';
import express from 'express';

cron.schedule('* * * * * *', () => {
    console.log('running a task every second');
});

const app = express();

app.get('/', (request, response) => {
    response.json('OK');
});

export = app;