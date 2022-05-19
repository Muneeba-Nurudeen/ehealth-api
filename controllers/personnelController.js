const Personnel = require("../models/personnelSchema");
const bcrypt = require("bcryptjs");
const { validateLoginPersonnel} = require("../config/validator");
const { generateToken } = require("../utils/generateToken");

// create a new personnel
const createUser = async (req, res) => {
  const { staffId, password } = req.body;
  const valid = await validateLoginPersonnel({ staffId, password });

  if (valid) {
    const hashedPassword = await bcrypt.hash(valid.password, 10);
    const user = await Personnel.create({
      staffId,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        staffId: user.staffId,
        password: user.password,
        id: user._id,
        token: generateToken(user._id),
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid data",
    });
  }
};

//auth a personnel
async function loginUser(req, res) {
  try {
    const { staffId, password } = req.body;
    const user = await Personnel.findOne({ staffId });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({
          staffId: user.staffId,
          password: user.password,
          id: user._id,
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json({
          message: "Invalid password",
        });
      }
    } else {
      res.status(401).json({
        message: "Invalid staffId",
      });
    }
  } catch {
    res.status(400).json({
      message: "user not found",
    });
  }
}

module.exports = { createUser, loginUser };
