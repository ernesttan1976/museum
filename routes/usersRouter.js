const userController = require("../controllers/usersController");
const express = require("express");
const router = express.Router();
// (/api/users)
router.post("/", userController.create);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

module.exports = router;
