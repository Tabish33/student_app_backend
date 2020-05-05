const Student = require("../models/student_model");

exports.addStudent = (req,res)=>{
    const student = new Student({
        name : req.body.name,
        school : req.body.school,
        subjects : req.body.subjects
    })

    student.save()
    .then(()=>{
        res.send("Student Saved Succesfully!");
    })
    .catch(err=>{
        res.status(400).send("An Error Occured");
    })
}

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