const User = require('../model/user.model');

module.exports = {
  createUser: async (userData) => {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  },

  getUsers: async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (userId) => {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw error;
    }
  },

  getUserByEmailId: async (emailId) => {
    try {
      const user = await User.findOne({ where: { email: emailId } });
      return user;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const user = await User.findByPk(userId);
      if (user) {
        await user.update(userData);
        return user;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (userId) => {
    try {
      const user = await User.findByPk(userId);
      if (user) {
        await user.destroy();
        return true;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw error;
    }
  }
};
