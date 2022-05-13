const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const Admin = require("../models/adminSchema");
const Personnel = require("../models/personnelSchema");

exports.protect = async function (req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (err) {
      res.status(401).json({
        message: "invalid token",
      });
    }

    if (!token) {
      res.status(401).json({
        message: "You are not authorized",
      });
    }
  }
};
//is admin middleware

exports.admin = async function (req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "You are not an authorized admin",
    });
  }
};





exports.protect = async function (req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.personnel = await Personnel.findById(decoded.id);
      next();
    } catch (err) {
      res.status(401).json({
        message: "invalid token",
      });
    }

    if (!token) {
      res.status(401).json({
        message: "You are not authorized",
      });
    }
  }
};
//is admin middleware

exports.admin = async function (req, res, next) {
    if (req.personnel && req.personnel.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "You are not an authorized admin",
    });
  }
};







exports.protect = async function (req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id);
      next();
    } catch (err) {
      res.status(401).json({
        message: "invalid token",
      });
    }

    if (!token) {
      res.status(401).json({
        message: "You are not authorized",
      });
    }
  }
};
//is admin middleware

exports.admin = async function (req, res, next) {
  if (req.admin && req.admin.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "You are not an authorized admin",
    });
  }
};

