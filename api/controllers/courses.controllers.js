const {
    createCourse,
    getCourseById,
    getCourseDetailsByDepartmentId,
    getCourses,
    updateCourse,
    deleteCourse,
  } = require("../dao/courses.dao");
  
  module.exports = {
    getCourseDetailsByDepartmentId: (req, res) => {
      const departmentId = req.params.departmentId;
      getCourseDetailsByDepartmentId(departmentId, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        if (!results || results.length === 0) {
          return res.status(404).json({
            success: 0,
            message: "No courses found for the department ID",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    },
  
    createCourse: (req, res) => {
      const body = req.body;
      createCourse(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    },
  
    getCourseById: (req, res) => {
      const id = req.params.id;
      getCourseById(id, (err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "record not found",
          });
        }
        return res.json({
          success: 1,
          message: results,
        });
      });
    },
  
    getCourses: (req, res) => {
      getCourses((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: results,
        });
      });
    },
  
    updateCourse: (req, res) => {
      const body = req.body;
      updateCourse(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.json({
          success: 1,
          message: "updates successfully",
        });
      });
    },
  
    deleteCourse: (req, res) => {
      const id = req.body.id;
      deleteCourse(id, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "record not found",
          });
        }
        return res.json({
          success: 1,
          message: "user deleted successfully",
        });
      });
    },
  };
  