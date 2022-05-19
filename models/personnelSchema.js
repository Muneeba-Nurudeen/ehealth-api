const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  staffId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  isPersonnel: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const Personnel = mongoose.model("personnel", userSchema);
module.exports = Personnel;
