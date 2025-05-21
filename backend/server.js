require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

//Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect to MongoDB
connectDB();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
// app.use("/api/reports", reportRoutes);

//Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const __dirname = path.resolve();

//Start Server

app.get("/", (req, res) => {
  res.send("API is running — nothing to see here.");
});
const PORT = process.env.PORT || 5000;
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "dist", "index.html")
//     );
//   });
// }

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
