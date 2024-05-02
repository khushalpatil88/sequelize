const {
    createAchievement,
    getAchievements,
    updateAchievement,
    deleteAchievement,
    getAchievementById,
  } = require("../services/notes.service");
  
  module.exports = {
    createAchievement: async (req, res) => {
      const body = req.body;
  
      try {
        const achievement = await createAchievement(body);
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
        const achievement = await getAchievementById(id);
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
          message: "Internal server error",
        });
      }
    },
  
    getAchievements: async (req, res) => {
      try {
        const achievements = await getAchievements();
        return res.json({
          success: 1,
          message: achievements,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    updateAchievement: async (req, res) => {
      const body = req.body;
  
      try {
        const achievement = await updateAchievement(body.id, body);
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
  
    deleteAchievement: async (req, res) => {
      const id = req.body.id;
      try {
        const deleted = await deleteAchievement(id);
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
          message: "Internal server error",
        });
      }
    }
  };
  