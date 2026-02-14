const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  createIntern,
  getInterns,
  updateIntern,
  deleteIntern
} = require("../controllers/intern.controller");

const router = express.Router();

router.post("/", auth, createIntern);
router.get("/", auth, getInterns);
router.put("/:index", auth, updateIntern);
router.delete("/:index", auth, deleteIntern);

module.exports = router;
