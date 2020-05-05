const Student = require("../models/student_model");

exports.getStudents = (req,res)=>{
    Student.find({})
    .skip(parseInt(req.params.skip))
    .limit(10)
    .then(notes=>{
        res.send(notes);
    })
    .catch(err=>{
        res.status(err.status).send(err.message);
    })
}