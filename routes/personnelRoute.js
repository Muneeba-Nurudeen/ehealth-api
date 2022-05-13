const { Router } = require("express");
const router = Router();
const {
  createUser: createPersonnel,
  loginUser: loginPersonnel,
} = require("../controllers/personnelController");

router.post("/register", createPersonnel).get("/login", loginPersonnel);

module.exports = router;
 