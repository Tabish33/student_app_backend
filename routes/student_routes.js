const express = require("express");
const router = express.Router();
const student_controller = require("../controllers/student_controller");

router.post("/add-student",student_controller.addStudent);
router.get("/top-ten/all",student_controller.showTopTenStudentsAcrossAllSchools);
router.get("/top-ten/school",student_controller.showTopTenStudentsAcrossSchool);

module.exports = router;