/* 
File name: app.js
Student’s Name: Kanika Aggarwal
StudentID: 301273633
Date: 1 Oct, 2022
*/


const express = require("express"),
	app = express(), routes = require('./routes');

const cors = require("cors");
const cookieSession = require("cookie-session");
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "kanika-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

const db = require('./models/db.init');

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./routes/auth.routes")(app);

const port = process.env.PORT || 8080

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use('/', routes);




app.listen(port, function() {
	console.log("Server is running on port:" + port);
});
