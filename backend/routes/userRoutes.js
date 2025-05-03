const express = require("express");
const { adminOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

// User Management Routes
router.get("/", proectect, adminOnly, getAllUsers); // Get all users (admin only)
router.get("/:id", protect, adminOnly, getUserById); // Get user by ID (admin only)
router.delete("/:id", protect, adminOnly, deleteUser); // Delete user by ID (admin only)

module.exports = router;
