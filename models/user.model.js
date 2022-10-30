
/* 
File name: user.model.js
Student’s Name: Kanika Aggarwal
StudentID: 301273633
Date: 29 Oct, 2022
*/
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
	name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    emailAddress: {
      type: Sequelize.STRING
    }
  });
return User;
};