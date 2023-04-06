const express = require("express");
const directionsController = require("../controllers/directionsController");

const router = express.Router();

// start from /api/exhibitions
// router.get("/", directionsController.index);
router.get("/from/:from/to/:to", directionsController.show);

module.exports = router;
