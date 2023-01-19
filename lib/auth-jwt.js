const jwt = require("jsonwebtoken");
exports.getToken = function getToken(user) {
  return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 3600 });
};
