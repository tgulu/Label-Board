const express = require("express");
const {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController");
const upload = require("../middlewares/uploadMiddleware");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Auth Routes
router.post("/login", loginUser); // Login route
router.post("/register", registerUser); // Register route
router.get("/profile", protect, getUserProfile); // Get User Profile
router.put("/profile", protect, updateUserProfile); // Update Profile

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
