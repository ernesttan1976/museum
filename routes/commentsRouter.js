const express = require('express');
const router = express.Router();
const commentsController = require("../controllers/commentsController");

// starting from /api
// router.get("/exhibitions/:id/comments", commentsController.index);
router.post("/exhibitions/:id/comments", commentsController.create);
// router.delete('/comments/:id', commentsController.delete);

module.exports = router;