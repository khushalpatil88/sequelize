const Course = require('../models/courses.model');

module.exports = {
  getCourseDetailsByDepartmentId: async (departmentId) => {
    try {
      const courses = await Course.findAll({ where: { department_id: departmentId } });
      return courses;
    } catch (error) {
      throw error;
    }
  },

  createCourse: async (courseData) => {
    try {
      const course = await Course.create(courseData);
      return course;
    } catch (error) {
      throw error;
    }
  },

  getCourses: async () => {
    try {
      const courses = await Course.findAll();
      return courses;
    } catch (error) {
      throw error;
    }
  },

  getCourseById: async (courseId) => {
    try {
      const course = await Course.findByPk(courseId);
      return course;
    } catch (error) {
      throw error;
    }
  },

  updateCourse: async (courseId, courseData) => {
    try {
      const course = await Course.findByPk(courseId);
      if (course) {
        await course.update(courseData);
        return course;
      } else {
        throw new Error('Course not found');
      }
    } catch (error) {
      throw error;
    }
  },

  deleteCourse: async (courseId) => {
    try {
      const course = await Course.findByPk(courseId);
      if (course) {
        await course.destroy();
        return true;
      } else {
        throw new Error('Course not found');
      }
    } catch (error) {
      throw error;
    }
  }
};
