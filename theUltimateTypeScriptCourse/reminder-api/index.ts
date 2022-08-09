import express from 'express';
import routerReminder from './routers/reminders'
const app = express();

app.use('/reminders', routerReminder)

app.listen(8000, () => console.log('server running...'));

