const achievementService = require("../services/achievement.service");

module.exports = {
  createAchievement: async (req, res) => {
    const body = req.body;
    try {
      const achievement = await achievementService.createAchievement(body);
      return res.status(200).json({
        success: 1,
        data: achievement,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  getAchievementById: async (req, res) => {
    const id = req.params.id;
    try {
      const achievement = await achievementService.getAchievementById(id);
      if (!achievement) {
        return res.json({
          success: 0,
          message: "Achievement not found",
        });
      }
      return res.json({
        success: 1,
        message: achievement,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  getAchievements: async (req, res) => {
    try {
      const achievements = await achievementService.getAchievements();
      return res.json({
        success: 1,
        message: achievements,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  updateAchievement: async (req, res) => {
    const body = req.body;
    const achievementId = body.achievementId;
    try {
      const achievement = await achievementService.updateAchievement(achievementId, body);
      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },

  deleteAchievement: async (req, res) => {
    const achievementId = req.body.achievementId;
    try {
      const deleted = await achievementService.deleteAchievement(achievementId);
      if (!deleted) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "Achievement deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
  },
};
