/* 
File name: auth.routes.js
Student’s Name: Kanika Aggarwal
StudentID: 301273633
Date: 29 Oct, 2022
*/
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);

app.post("/api/auth/addcontact", controller.addcontact);
app.post("/api/auth/listcontact", controller.listcontact);
app.get("/api/auth/deletecontact", controller.deletecontact);
app.post("/api/auth/updatecontact", controller.updatecontact);
app.get("/api/auth/editcontact", controller.getcontact);

	app.get("/secure/list", controller.listcontact);
	
	
	app.get("/secure/addcontact", function(req, res) {
		res.render("secure/addcontact", {
			page: 1
		});
	});

};