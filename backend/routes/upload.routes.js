const express = require("express");
const { uploadMiddleware, uploadFile } = require("../controllers/upload.controller");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

// POST /api/upload
router.post("/", auth, uploadMiddleware, uploadFile);

module.exports = router; // must export router directly
