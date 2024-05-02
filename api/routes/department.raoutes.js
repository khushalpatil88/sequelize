const express = require('express');
const router = express.Router();
const {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} = require('../controllers/department.controller');

router.post('/', createDepartment);
router.get('/', getDepartments);
router.get('/:id', getDepartmentById);
router.patch('/', updateDepartment);
router.delete('/', deleteDepartment);

module.exports = router;
