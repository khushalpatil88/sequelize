const Department = require('../models/department.model');

module.exports = {
  createDepartment: async (departmentData) => {
    try {
      const department = await Department.create(departmentData);
      return department;
    } catch (error) {
      throw error;
    }
  },

  getDepartments: async () => {
    try {
      const departments = await Department.findAll();
      return departments;
    } catch (error) {
      throw error;
    }
  },

  getDepartmentById: async (departmentId) => {
    try {
      const department = await Department.findByPk(departmentId);
      return department;
    } catch (error) {
      throw error;
    }
  },

  updateDepartment: async (departmentId, departmentData) => {
    try {
      const department = await Department.findByPk(departmentId);
      if (department) {
        await department.update(departmentData);
        return department;
      } else {
        throw new Error('Department not found');
      }
    } catch (error) {
      throw error;
    }
  },

  deleteDepartment: async (departmentId) => {
    try {
      const department = await Department.findByPk(departmentId);
      if (department) {
        await department.destroy();
        return true;
      } else {
        throw new Error('Department not found');
      }
    } catch (error) {
      throw error;
    }
  }
};
