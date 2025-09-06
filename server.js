const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const userRoutes = require("./routes/userRoutes"); // ⬅️ make sure path is correct

const app = express();
app.use(express.json()); // ⬅️ allows reading JSON body

// Simple check route
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

// Use user routes
app.use("/api/users", userRoutes); // ⬅️ VERY IMPORTANT

// DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port  http://localhost:${PORT}`));
  })
  .catch(err => console.error("❌ DB Connection Error:", err));
