const express = require('express');
const router = express.Router();
const {
  createAchievement,
  getAchievements,
  getAchievementById,
  updateAchievement,
  deleteAchievement
} = require('../controllers/achievement.controller');

router.post('/achievement', createAchievement);
router.get('/achievement', getAchievements);
router.get('/achievement/:id', getAchievementById);
router.patch('/achievement', updateAchievement);
router.delete('/achievement', deleteAchievement);

module.exports = router;
