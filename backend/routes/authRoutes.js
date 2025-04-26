const express = require("express");
const {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController");

const router = express.Router();

//Auth Routes
router.post("/login", loginUser); // Login route
router.post("/register", registerUser); // Register route
router.get("/profile", protect, getUserProfile); // Get User Profile
router.get("profile", protect, updateUserProfile); // Update Profile

module.exports = router;
