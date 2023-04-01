const express = require("express");
const exhibitionsController = require("../controllers/exhibitionsController");
const router = express.Router();

// start from /api/exhibitions
router.get("/", exhibitionsController.index);
router.post("/", exhibitionsController.create);
// router.get("/seed", holidaysController.seed);

// router.get("/:id", holidaysController.show);
router.delete("/:id", exhibitionsController.delete);
router.put("/:id", exhibitionsController.update);

module.exports = router;