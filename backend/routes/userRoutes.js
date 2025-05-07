const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers); // Get all users (admin only)
router.get("/:id", protect, adminOnly, getUserById); // Get user by ID (admin only)
router.delete("/:id", protect, adminOnly, deleteUser); // Delete user by ID (admin only)

module.exports = router;
