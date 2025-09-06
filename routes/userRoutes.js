const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CRUD routes
router.post("/", userController.createUser);   // POST /api/users
router.get("/", userController.getUsers);      // GET  /api/users
router.get("/:id", userController.getUser);    // GET  /api/users/:id
router.put("/:id", userController.updateUser); // PUT  /api/users/:id
router.delete("/:id", userController.deleteUser); // DELETE /api/users/:id

module.exports = router;
