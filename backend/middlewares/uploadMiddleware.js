const multer = require("multer");

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    // Rename file: timestamp-originalname (e.g. 1652134561234-image.png)
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter to allow only specific image types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Only .jpeg, .jpg and .png formats are allowed"), false); // Reject file
  }
};

// Initialise upload middleware
const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
