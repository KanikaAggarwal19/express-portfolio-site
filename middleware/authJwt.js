/* 
File name: authjwt.js
Student’s Name: Kanika Aggarwal
StudentID: 301273633
Date: 29 Oct, 2022
*/


const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models/db.init");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken,
};
module.exports = authJwt;
