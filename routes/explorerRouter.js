const express = require("express");
const explorerController = require("../controllers/explorerController");

const router = express.Router();

// start from /api/exhibitions
router.get("/", explorerController.index);

module.exports = router;
