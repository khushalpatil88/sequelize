const Attendance = require('../models/attendance.model');

module.exports = {
  createAttendance: async (attendanceData) => {
    try {
      const attendance = await Attendance.create(attendanceData);
      return attendance;
    } catch (error) {
      throw error;
    }
  },

  getAttendance: async () => {
    try {
      const attendance = await Attendance.findAll();
      return attendance;
    } catch (error) {
      throw error;
    }
  },

  getAttendanceById: async (attendanceId) => {
    try {
      const attendance = await Attendance.findByPk(attendanceId);
      return attendance;
    } catch (error) {
      throw error;
    }
  },

  updateAttendance: async (attendanceId, attendanceData) => {
    try {
      const attendance = await Attendance.findByPk(attendanceId);
      if (attendance) {
        await attendance.update(attendanceData);
        return attendance;
      } else {
        throw new Error('Attendance not found');
      }
    } catch (error) {
      throw error;
    }
  },

  deleteAttendance: async (attendanceId) => {
    try {
      const attendance = await Attendance.findByPk(attendanceId);
      if (attendance) {
        await attendance.destroy();
        return true;
      } else {
        throw new Error('Attendance not found');
      }
    } catch (error) {
      throw error;
    }
  },

  getAttendanceByUserId: async (userId) => {
    try {
      const attendance = await Attendance.findAll({ where: { userId } });
      return attendance;
    } catch (error) {
      throw error;
    }
  }
};
