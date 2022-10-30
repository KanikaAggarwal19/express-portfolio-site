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