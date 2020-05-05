const express = require("express");
const router = express.Router();
const analytics_controller = require("../controllers/analytics_controller");

router.get("/top-ten/students/all",analytics_controller.showTopTenStudentsAcrossAllSchools);
router.get("/top-ten/students/school",analytics_controller.showTopTenStudentsAcrossSchool);
router.get("/top-ten/schools/all",analytics_controller.showTopTenSchools);
router.get("/top-ten/schools/subject",analytics_controller.showTopTenSchoolsInSubject);
router.get("/top-ten/subject/all",analytics_controller.showTopTenStudentsInSubjectAcrossAllSchools);
router.get("/top-ten/subject/school",analytics_controller.showTopTenStudentsInSubjectAcrossSchool);
module.exports = router;