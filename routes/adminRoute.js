const { Router } = require("express");
const router = Router();
const {
  createUser: createAdmin,
  loginUser: loginAdmin,
} = require("../controllers/adminController");

router.post("/register", createAdmin).get("/login", loginAdmin);

module.exports = router;
