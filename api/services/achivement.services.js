const Achievement = require('../models/achievement.model');

module.exports = {
  createAchievement: async (achievementData) => {
    try {
      const achievement = await Achievement.create(achievementData);
      return achievement;
    } catch (error) {
      throw error;
    }
  },

  getAchievements: async () => {
    try {
      const achievements = await Achievement.findAll();
      return achievements;
    } catch (error) {
      throw error;
    }
  },

  getAchievementById: async (achievementId) => {
    try {
      const achievement = await Achievement.findByPk(achievementId);
      return achievement;
    } catch (error) {
      throw error;
    }
  },

  updateAchievement: async (achievementId, achievementData) => {
    try {
      const achievement = await Achievement.findByPk(achievementId);
      if (achievement) {
        await achievement.update(achievementData);
        return achievement;
      } else {
        throw new Error('Achievement not found');
      }
    } catch (error) {
      throw error;
    }
  },

  deleteAchievement: async (achievementId) => {
    try {
      const achievement = await Achievement.findByPk(achievementId);
      if (achievement) {
        await achievement.destroy();
        return true;
      } else {
        throw new Error('Achievement not found');
      }
    } catch (error) {
      throw error;
    }
  }
};
