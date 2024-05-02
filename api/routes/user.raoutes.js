const express = require("express");
const router = express.Router();
const {
  createuser,
  getUserByUserId,
  updateUser,
  deleteuser,
  getusers,
  getUserByEmailId,
  login,
} = require("../controllers/user.controllers");

router.post("/users", createuser);
router.get("/users", getusers);
router.get("/users/:id", getUserByUserId);
router.patch("/users", updateUser);
router.delete("/users", deleteuser);
router.get("/users/:emailId", getUserByEmailId);
router.post("/login", login);

module.exports = router;
