const express = require("express");
const directionsController = require("../controllers/directionsController");

const router = express.Router();

// start from /api/map/directions

router.get("/from/:from/to/:to", directionsController.show);

module.exports = router;
