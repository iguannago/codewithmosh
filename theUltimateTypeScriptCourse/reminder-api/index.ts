import express from 'express';
import routerHome from './routers/home'
import routerReminder from './routers/reminders';
const app = express();
const port = 8000;

app.use(express.json());
app.use('/', routerHome);
app.use('/reminders', routerReminder);

app.listen(port, () => console.log(`server started on port ${port}`));
