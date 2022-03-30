const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/courses?searchBy', (req, res) => {
    res.send(req.query);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(`displaying course: ${req.params.id}`);
});

const portNumber = process.env.PORT | 3000;
app.listen(portNumber, ()=> {
    console.log(`Listening on port ${portNumber} ...`);
});