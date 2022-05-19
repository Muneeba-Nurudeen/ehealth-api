const yup = require("yup");

function validateRegister(data) {
  const userSchema = yup.object().shape({
    username: yup.string().required("username can't be null").min(3).max(20),
    email: yup.string().email().required("email can't be null").min(3).max(50),
    password: yup.string().required("password can't be null").min(8).max(20),
  });

  return userSchema.validate(data);
}

function validateLoginPersonnel(data) {
  const personnelSchema = yup.object().shape({
    staffId: yup.string().required("staffId can't be null").min(3).max(20),
    password: yup.string().required("password can't be null").min(8).max(20),
  });

  return personnelSchema.validate(data);
}


function validateAdmin(data) {
  const adminSchema = yup.object().shape({
    username: yup.string().required("username can't be null").min(3).max(20),
    email: yup.string().email().required("email can't be null").min(3).max(50),
    password: yup.string().required("password can't be null").min(8).max(20),
  });

  return adminSchema.validate(data);
}

module.exports = { 
  validateAdmin,
  validateLoginPersonnel,
  validateRegister
}
