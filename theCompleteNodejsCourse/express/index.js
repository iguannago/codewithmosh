const Joi = require('joi');
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
    if (course == undefined) sendError(res, 404, `course with id=${req.params.id} is not found`);
    
    res.json(course);
});

app.post('/api/courses', (req, res) => {
    const {error} = reqBodySchema.validate(req.body);
    if (error != undefined) {
        sendError(res, 400, error);
    }

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
        sendError(res, 400, error);
        return;    
    }
}

function validateIdReqParam(idReqParam,res) {
    const idReqParamSchema = Joi.number().required();
    let {error} = idReqParamSchema.validate(idReqParam);
    if (error != undefined) {
        sendError(res, 400, error);
        return;    
    }
}

app.put('/api/courses/:id', (req, res) => {
    validateIdReqParam(req.params.id, res);
    validateReqBody(req.body, res);
   
    const course = courses.find(c => c.id == req.params.id);
    if (course == undefined ) {
        sendError(res, 404, `course with id=${req.params.id} is not found`);
        return ;
    }

    const courseIndex = courses.findIndex(e => e.id == req.params.id);
    courses[courseIndex] = req.body;
    res.json({
        'message': `course updated successfully`,
        'course': courses[courseIndex]
    });
});

function sendError(res, errorCode, errorMsg) {
    res.status(errorCode).json({ 
        'error': errorMsg
    });
}

const portNumber = process.env.PORT | 3000;
app.listen(portNumber, ()=> {
    console.log(`Listening on port ${portNumber} ...`);
});

