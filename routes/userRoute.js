const { Router } = require("express");
const router = Router();
const { createUser, loginUser } = require("../controllers/userController");

router.post("/register", createUser).get("/login", loginUser);

module.exports = router;
