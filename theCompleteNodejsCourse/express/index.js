const express = require('express');
const app = express();

app.use(express.json());

const courses = [{
    id: 1,
    name: 'course1'
}, {
    id: 2, 
    name: 'course2'
},
{
    id: 3,
    name: 'course3'
}
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == req.params.id);
    if (course == undefined) res.status(404).send(`course with id=${req.params.id} is not found`);
    
    res.json(course);
});

app.post('/api/courses', (req, res) => {
    if (req.body.id == undefined || req.body.name == undefined) {
        res.status(400).json({
            "error": 400, 
            "message": "id and name are required"
        });
        return; 
    }
    const course = req.body;
    console.log(`course added successfully: ${JSON.stringify(course)}`);
    courses.push(course);
    res.json(course);
});

const portNumber = process.env.PORT | 3000;
app.listen(portNumber, ()=> {
    console.log(`Listening on port ${portNumber} ...`);
});