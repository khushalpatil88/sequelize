const express = require('express');
const router = express.Router();
const {
  createAchievement,
  getAchievements,
  getAchievementById,
  updateAchievement,
  deleteAchievement,
} = require('../controllers/notes.controller');

router.post('/', createAchievement);
router.get('/', getAchievements);
router.get('/:id', getAchievementById);
router.patch('/', updateAchievement);
router.delete('/', deleteAchievement);

module.exports = router;
