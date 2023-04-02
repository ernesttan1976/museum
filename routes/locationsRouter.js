const express = require("express");
const locationsController = require("../controllers/locationsController");
const router = express.Router();

// start from /api/locations
router.get("/", locationsController.index);
router.post("/", locationsController.create);

// router.get("/:id", holidaysController.show);
router.delete("/:id", locationsController.delete);
router.put("/:id", locationsController.update);

module.exports = router;