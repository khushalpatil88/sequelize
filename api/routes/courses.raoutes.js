const express = require('express');
const router = express.Router();
const {
  createCourse,
  getCourseById,
  getCourseDetailsByDepartmentId,
  getCourses,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses.controller');

router.post('/course', createCourse);
router.get('/course', getCourses);
router.get('/course/:id', getCourseById);
router.get('/course/department/:departmentId', getCourseDetailsByDepartmentId);
router.patch('/course', updateCourse);
router.delete('/course', deleteCourse);

module.exports = router;
