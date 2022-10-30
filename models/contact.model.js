/* 
File name: contact.model.js
Student’s Name: Kanika Aggarwal
StudentID: 301273633
Date: 29 Oct, 2022
*/


module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define("contact", {
    contactName: {
      type: Sequelize.STRING
    },
    contactNumber: {
      type: Sequelize.STRING
    },
    emailAddress: {
      type: Sequelize.STRING
    }
  });

return Contact;
};