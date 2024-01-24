import cron from "node-cron";

cron.schedule('* * * * * *', () => {
    console.log('running a task every second');
});

console.info("App started.");