const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

let courses = [{
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
    if (course == undefined) sendError(res, 404, `course with id=${req.params.id} is not found`);
    
    res.json(course);
});

app.post('/api/courses', (req, res) => {
    validateReqBody(req.body, res);

    const course = req.body;
    courses.push(course);
    
    res.json({
        'message': `course added successfully`,
        'course': course
    });
});

function validateReqBody(reqBody, res) {
    const reqBodySchema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required()
    });
    let {error} = reqBodySchema.validate(reqBody);
    if (error != undefined) {
        return sendError(res, 400, error);    
    }
}

function validateIdReqParam(idReqParam,res) {
    const idReqParamSchema = Joi.number().required();
    let {error} = idReqParamSchema.validate(idReqParam);
    if (error != undefined) {
        return sendError(res, 400, error);    
    }
}

app.put('/api/courses/:id', (req, res) => {
    validateIdReqParam(req.params.id, res);
    validateReqBody(req.body, res);
   
    findCourse(req.params.id, res);

    const courseIndex = courses.findIndex(e => e.id == req.params.id);
    courses[courseIndex] = req.body;
    res.json({
        'message': `course updated successfully`,
        'course': courses[courseIndex]
    });
});

app.delete('/api/courses/:id', (req, res) => {
    validateIdReqParam(req.params.id, res);

    findCourse(req.params.id, res);
    
    courseIndexToDelete = courses.findIndex(c => c.id == req.params.id);
    courseToDelete = courses[courseIndexToDelete];
    
    courses = courses.filter(c => c.id != req.params.id);

    res.json({
        'message': `course deleted successfully`,
        'course': courseToDelete
    });
});

function findCourse(id, res) {
    const course = courses.find(c => c.id == id);
    if (course == undefined ) {
        return sendError(res, 404, `course with id=${id} is not found`);
    }
}

function sendError(res, errorCode, errorMsg) {
    return res.status(errorCode).json({ 
        'error': errorMsg
    });
}

const portNumber = process.env.PORT | 3000;
app.listen(portNumber, ()=> {
    console.log(`Listening on port ${portNumber} ...`);
});


