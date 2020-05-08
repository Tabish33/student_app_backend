const express = require("express");
const router = express.Router();
const analytics_controller = require("../controllers/analytics_controller");

router.get("/top-ten/students/all/:type",analytics_controller.showTopTenStudentsAcrossAllSchools);
router.get("/top-ten/students/:school/:type",analytics_controller.showTopTenStudentsAcrossSchool);
router.get("/top-ten/schools/all/:type",analytics_controller.showTopTenSchools);
router.get("/top-ten/schools/:subject/:type",analytics_controller.showTopTenSchoolsInSubject);
router.get("/top-ten/subject/all/:subject/:type",analytics_controller.showTopTenStudentsInSubjectAcrossAllSchools);
router.get("/top-ten/subject/:school/:subject/:type",analytics_controller.showTopTenStudentsInSubjectAcrossSchool);
module.exports = router;