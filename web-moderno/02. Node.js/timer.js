const schedule = require('node-schedule');

const task1 = schedule.scheduleJob('+/5 * 15 * * 7', ()=>console.log('Running task1'));
