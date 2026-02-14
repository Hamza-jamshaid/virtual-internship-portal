require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
console.log("authRoutes:", authRoutes); // must be a function/router

const uploadRoutes = require("./routes/upload.routes");
console.log("uploadRoutes:", uploadRoutes); // must be a function/router

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/intern", require("./routes/intern.routes"));
app.use("/api/upload", require("./routes/upload.routes"));
app.use("/api/performance", require("./routes/performance.routes"));

app.get("/", (req, res) => {
  res.send("Virtual Internship Portal API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const { connectDB } = require("./config/db");

(async () => {
  try {
    await connectDB();
    console.log("DB OK");
  } catch (e) {
    console.log("DB FAIL");
  }
})();

app.use("/api/upload", require("./routes/upload.routes"));
app.use("/api/performance", require("./routes/performance.routes"));

console.log("JWT SECRET:", process.env.JWT_SECRET);
