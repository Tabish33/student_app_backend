const express = require("express");
const router = express.Router();
const student_controller = require("../controllers/student_controller");

router.post("/add-student",student_controller.addStudent);
router.get("/top-ten/yearly/all",student_controller.showTopTenStudentsAcrossAllSchoolsYearly);
router.get("/top-ten/yearly/school",student_controller.showTopTenStudentsAcrossSchoolYearly);

module.exports = router;