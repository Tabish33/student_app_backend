const express = require("express");
const router = express.Router();
const student_controller = require("../controllers/student_controller");

router.get("/get-students/:skip",student_controller.getStudents);

module.exports = router