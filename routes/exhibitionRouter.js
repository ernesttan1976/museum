const express = require("express");
const exhibitionsController = require("../controllers/exhibitionsController");
const router = express.Router();

// start from /api/exhibitions

router.get("/", exhibitionsController.index);
router.post("/", exhibitionsController.create);
// router.get("/seed", holidaysController.seed);

// router.get("/:id", holidaysController.show);
// router.delete("/:id", holidaysController.delete);
// router.put("/:id", holidaysController.update);

module.exports = router;