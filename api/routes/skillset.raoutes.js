const express = require('express');
const router = express.Router();
const {
  createSkillSet,
  getSkillSets,
  getSkillSetById,
  updateSkillSet,
  deleteSkillSet,
  getAllSkillSetByUserId,
} = require('../controllers/skillset.controllers');

router.post('/', createSkillSet);
router.get('/', getSkillSets);
router.get('/:id', getSkillSetById);
router.patch('/', updateSkillSet);
router.delete('/', deleteSkillSet);
router.get('/user/:userId', getAllSkillSetByUserId);

module.exports = router;
