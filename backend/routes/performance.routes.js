const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  addPerformance,
  getPerformance
} = require("../controllers/performance.controller");

const router = express.Router();

router.post("/", auth, addPerformance);
router.get("/", auth, getPerformance);

module.exports = router;
