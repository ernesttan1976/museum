const express = require("express");
const explorerController = require("../controllers/explorerController");

const router = express.Router();

// start from /api/exhibitions
router.get("/", explorerController.index);
router.get("/from/:from/to/:to", explorerController.show);

module.exports = router;
