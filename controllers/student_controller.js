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

exports.showTopTenStudentsAcrossAllSchools = (req,res)=>{
    var result_type = req.body.result_type 

    Student.aggregate([
       {
           $project: {
            _id : 0,   
            name: 1,
            school: 1,
            'total_marks': {
              $reduce: {
                input: "$subjects",
                initialValue: 0,
                in: {
                    $sum: [
                        "$$value",
                        {
                            $cond:{
                                if: {$eq: [ result_type, "yearly" ] },
                                then: "$$this.yearly",
                                else: "$$this.quartely"
                            }
                        }
                        
                     ]
                }
              }
            }
          }
       },
       {
            $sort : {total_marks: -1}
       },
       {
            $limit : 10  
       } 
    ])
    .exec((err,result)=>{
        if (err) {
            res.status(400).send(err.message);
        } else {    
            res.send(result)
        }
    })
}


exports.showTopTenStudentsAcrossSchool = (req,res)=>{
    var selected_school = req.body.school
    var result_type = req.body.result_type 
    Student.aggregate([
       {
             $match: {school : selected_school }
       },
       {
           $project: {
            _id : 0,   
            name: 1,
            school: 1,
            'total_marks': {
              $reduce: {
                input: "$subjects",
                initialValue: 0,
                in: {
                    $sum: [
                        "$$value",
                        {
                            $cond:{
                                if: {$eq: [ result_type, "yearly" ] },
                                then: "$$this.yearly",
                                else: "$$this.quartely"
                            }
                        }
                        
                     ]
                }
              }
            }
          }
       },
       {
            $sort : {total_marks: -1}
       },
       {
            $limit : 10  
       } 
    ])
    .exec((err,result)=>{
        if (err) {
            res.status(400).send(err.message);
        } else {    
            res.send(result)
        }
    })
}

exports.showTopTenSchools = (req,res)=>{
    var result_type = req.body.result_type 
    Student.aggregate([
       {
           $project: {
            _id : 0,   
            name: 1,
            school: 1,
            'total_marks': {
              $reduce: {
                input: "$subjects",
                initialValue: 0,
                in: {
                    $sum: [
                        "$$value",
                        {
                            $cond:{
                                if: {$eq: [ result_type, "yearly" ] },
                                then: "$$this.yearly",
                                else: "$$this.quartely"
                            }
                        }
                        
                     ]
                }
              }
            }
          }
       },
       {
           $group: {
                _id : "$school",
                'total_students_marks' : {
                    $sum : "$total_marks"
                },
                'total_students': {
                    $sum : 1
                }
           }
       },
       {
           $project: {
                "avg_points": {
                    $divide: [ "$total_students_marks", "$total_students" ]
                } 
           }
       },
       {
            $sort : {avg_points: -1}
       },
       {
            $limit : 10  
       } 
    ])
    .exec((err,result)=>{
        if (err) {
            res.status(400).send(err.message);
        } else {    
            res.send(result)
        }
    })
}

exports.showTopTenStudentsInSubjectAcrossAllSchools = (req,res)=>{
    var selected_subject = req.body.subject
    var result_type = req.body.result_type 
    Student.aggregate([
       {
           $unwind: "$subjects"
       },
       {
           $match : { "subjects.subject": selected_subject }
       },
       {
           $project:{
               _id : 0,
               name: 1,
               school: 1,
                'score': {
                    $cond:{
                        if : {$eq : [result_type, "yearly" ] },
                        then : "$subjects.yearly" ,
                        else : "$subjects.quartely"
                    }
                }
           }
       },
       {
           $sort: { score: -1}
       }

    ])
    .exec((err,result)=>{
        if (err) {
            res.status(400).send(err.message);
        } else {    
            res.send(result)
        }
    })
}

exports.showTopTenStudentsInSubjectAcrossSchool = (req,res)=>{
    var selected_school = req.body.school
    var selected_subject = req.body.subject
    var result_type = req.body.result_type 
    Student.aggregate([
        {
            $match : {school: selected_school}
        },
       {
           $unwind: "$subjects"
       },
       {
           $match : { "subjects.subject": selected_subject }
       },
       {
           $project:{
               _id : 0,
               name: 1,
               school: 1,
                'score': {
                    $cond:{
                        if : {$eq : [result_type, "yearly" ] },
                        then : "$subjects.yearly" ,
                        else : "$subjects.quartely"
                    }
                }
           }
       },
       {
           $sort: { score: -1}
       }

    ])
    .exec((err,result)=>{
        if (err) {
            res.status(400).send(err.message);
        } else {    
            res.send(result)
        }
    })
}