const express = require("express");
const router = express.Router();
const student_controller = require("../controllers/analytics_controller");

router.post("/add-student",student_controller.addStudent);
router.get("/top-ten/students/all",student_controller.showTopTenStudentsAcrossAllSchools);
router.get("/top-ten/students/school",student_controller.showTopTenStudentsAcrossSchool);
router.get("/top-ten/schools/all",student_controller.showTopTenSchools);
router.get("/top-ten/schools/subject",student_controller.showTopTenSchoolsInSubject);
router.get("/top-ten/subject/all",student_controller.showTopTenStudentsInSubjectAcrossAllSchools);
router.get("/top-ten/subject/school",student_controller.showTopTenStudentsInSubjectAcrossSchool);
module.exports = router;