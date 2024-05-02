const SkillSet = require('../model/skillset.model');

module.exports = {
  createSkillSet: async (userData) => {
    try {
      const skillSet = await SkillSet.create(userData);
      return skillSet;
    } catch (error) {
      throw error;
    }
  },

  getSkillSets: async () => {
    try {
      const skillSets = await SkillSet.findAll();
      return skillSets;
    } catch (error) {
      throw error;
    }
  },

  getSkillSetById: async (skillSetId) => {
    try {
      const skillSet = await SkillSet.findByPk(skillSetId);
      return skillSet;
    } catch (error) {
      throw error;
    }
  },

  updateSkillSet: async (skillSetId, userData) => {
    try {
      const skillSet = await SkillSet.findByPk(skillSetId);
      if (skillSet) {
        await skillSet.update(userData);
        return skillSet;
      } else {
        throw new Error('SkillSet not found');
      }
    } catch (error) {
      throw error;
    }
  },

  deleteSkillSet: async (skillSetId) => {
    try {
      const skillSet = await SkillSet.findByPk(skillSetId);
      if (skillSet) {
        await skillSet.destroy();
        return true;
      } else {
        throw new Error('SkillSet not found');
      }
    } catch (error) {
      throw error;
    }
  },

  getAllSkillSetByUserId: async (userId) => {
    try {
      const skillSets = await SkillSet.findAll({ where: { user_id: userId } });
      return skillSets;
    } catch (error) {
      throw error;
    }
  }
};
