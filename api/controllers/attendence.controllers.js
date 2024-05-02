const attendanceService = require("../services/attendance.service");

module.exports = {
  createAttendance: async (req, res) => {
    const body = req.body;
    try {
      const attendance = await attendanceService.createAttendance(body);
      return res.status(200).json({
        success: 1,
        data: attendance,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  getAttendanceByUserId: async (req, res) => {
    const userId = req.params.userId;
    try {
      const attendance = await attendanceService.getAttendanceByUserId(userId);
      if (!attendance || attendance.length === 0) {
        return res.status(404).json({
          success: 0,
          message: "No attendance found for the user ID",
        });
      }
      return res.status(200).json({
        success: 1,
        data: attendance,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  getAttendanceById: async (req, res) => {
    const attendanceId = req.params.id;
    try {
      const attendance = await attendanceService.getAttendanceById(attendanceId);
      if (!attendance) {
        return res.json({
          success: 0,
          message: "Attendance not found",
        });
      }
      return res.json({
        success: 1,
        message: attendance,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  getAttendance: async (req, res) => {
    try {
      const attendance = await attendanceService.getAttendance();
      return res.json({
        success: 1,
        message: attendance,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  updateAttendance: async (req, res) => {
    const body = req.body;
    const attendanceId = body.attendanceId;
    try {
      const attendance = await attendanceService.updateAttendance(attendanceId, body);
      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  deleteAttendance: async (req, res) => {
    const attendanceId = req.body.attendanceId;
    try {
      const deleted = await attendanceService.deleteAttendance(attendanceId);
      if (!deleted) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "Attendance deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },
};
