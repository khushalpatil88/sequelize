const {
    createSkillSet,
    getSkillSets,
    updateSkillSet,
    deleteSkillSet,
    getSkillSetById,
    getAllSkillSetByUserId,
  } = require("../services/skillset.services");
  
  module.exports = {
    createSkillSet: async (req, res) => {
      const body = req.body;
  
      try {
        const skillSet = await createSkillSet(body);
        return res.status(200).json({
          success: 1,
          data: skillSet,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
    },
  
    getSkillSetById: async (req, res) => {
      const id = req.params.id;
      try {
        const skillSet = await getSkillSetById(id);
        if (!skillSet) {
          return res.json({
            success: 0,
            message: "SkillSet record not found",
          });
        }
        return res.json({
          success: 1,
          message: skillSet,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    getSkillSets: async (req, res) => {
      try {
        const skillSets = await getSkillSets();
        return res.json({
          success: 1,
          message: skillSets,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    updateSkillSet: async (req, res) => {
      const body = req.body;
  
      try {
        const skillSet = await updateSkillSet(body.id, body);
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
  
    deleteSkillSet: async (req, res) => {
      const id = req.body.id;
      try {
        const deleted = await deleteSkillSet(id);
        if (!deleted) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
        }
        return res.json({
          success: 1,
          message: "SkillSet deleted successfully",
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    getAllSkillSetByUserId: async (req, res) => {
      const userId = req.params.userId;
      try {
        const skillSets = await getAllSkillSetByUserId(userId);
        if (!skillSets) {
          return res.status(404).json({
            success: 0,
            message: "No Skillset found for the user ID",
          });
        }
        return res.status(200).json({
          success: 1,
          data: skillSets,
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
  