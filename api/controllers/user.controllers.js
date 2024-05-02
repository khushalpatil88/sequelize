const {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmailId,
  } = require("../services/user.services");
  const bcrypt = require("bcrypt");
  
  module.exports = {
    login: async (req, res) => {
      const body = req.body;
      const email = body.email;
      const password = body.password;
  
      if (!email || !password) {
        return res.status(400).json({
          success: 0,
          message: "Please provide both email and password",
        });
      }
  
      try {
        const user = await getUserByEmailId(email);
        if (!user) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
        }
  
        const match = await bcrypt.compare(password, user.password);
        if (user.email != email || !match) {
          return res.json({
            success: 0,
            message: "Invalid MailId and Password",
          });
        }
        return res.json({
          success: 1,
          message: "Login successful",
        });
      } catch (error) {
        res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    createuser: async (req, res) => {
      const body = req.body;
      const salt = bcrypt.genSaltSync(10);
      body.password = bcrypt.hashSync(body.password, salt);
  
      try {
        const user = await createUser(body);
        return res.status(200).json({
          success: 1,
          data: user,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
    },
  
    getUserByUserId: async (req, res) => {
      const id = req.params.id;
      try {
        const user = await getUserById(id);
        if (!user) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
        }
        return res.json({
          success: 1,
          message: user,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    getusers: async (req, res) => {
      try {
        const users = await getUsers();
        return res.json({
          success: 1,
          message: users,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    updateuser: async (req, res) => {
      const body = req.body;
      const salt = bcrypt.genSaltSync(10);
      body.password = bcrypt.hashSync(body.password, salt);
  
      try {
        const user = await updateUser(body.id, body);
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
  
    deleteuser: async (req, res) => {
      const id = req.body.id;
      try {
        const deleted = await deleteUser(id);
        if (!deleted) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
        }
        return res.json({
          success: 1,
          message: "User deleted successfully",
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Internal server error",
        });
      }
    },
  
    getUserByEmailId: async (req, res) => {
      const emailId = req.params.emailId;
      try {
        const user = await getUserByEmailId(emailId);
        if (!user) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
        }
        return res.json({
          success: 1,
          message: user,
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
  