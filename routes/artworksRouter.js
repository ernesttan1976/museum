const express = require("express");
const artworksController = require("../controllers/artworksController");
const router = express.Router();

router.post("/", artworksController.create); // create new artwork
router.get("/", artworksController.index); // show artwork at artwork page
router.get("/:id", artworksController.show); // show find by ID 
router.delete("/:id", artworksController.delete); // delete the artwork
router.put("/:id", artworksController.update); // edit and update the artwork

module.exports = router;
