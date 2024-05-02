const express = require('express');
const router = express.Router();
const {
  createAttendance,
  getAttendance,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
  getAttendanceByUserId
} = require('../controllers/attendance.controller');

router.post('/attendance', createAttendance);
router.get('/attendance', getAttendance);
router.get('/attendance/:id', getAttendanceById);
router.get('/attendance/user/:userId', getAttendanceByUserId);
router.patch('/attendance', updateAttendance);
router.delete('/attendance', deleteAttendance);

module.exports = router;
