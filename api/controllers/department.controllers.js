const {
    createDepartment,
    getDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment,
  } = require("../services/department.service");
  
  module.exports = {
    createDepartment: async (req, res) => {
      const body = req.body;
  
      try {
        const department = await createDepartment(body);
        return res.status(200).json({
          success: 1,
          data: department,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
    },
  
    getDepartmentById: async (req, res) => {
      const id = req.params.id;
      try {
        const department = await getDepartmentById(id);
        if (!department) {
          return res.json({
            success: 0,
            message: "Department not found",
          });
        }
        return res.json({
          success: 1,
          message: department,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    getDepartments: async (req, res) => {
      try {
        const departments = await getDepartments();
        return res.json({
          success: 1,
          message: departments,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    updateDepartment: async (req, res) => {
      const body = req.body;
  
      try {
        const department = await updateDepartment(body.departmentId, body);
        return res.json({
          success: 1,
          message: "Updated successfully",
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    deleteDepartment: async (req, res) => {
      const id = req.body.departmentId;
      try {
        const deleted = await deleteDepartment(id);
        if (!deleted) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
        }
        return res.json({
          success: 1,
          message: "Department deleted successfully",
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    }
  };
  