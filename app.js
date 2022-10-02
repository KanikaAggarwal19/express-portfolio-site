/* 
File name: app.js
Student’s Name: Kanika Aggarwal
StudentID: 301273633
Date: 1 Oct, 2022
*/


const express = require("express"),
	app = express(), routes = require('./routes');

const port = process.env.PORT || 8080

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use('/', routes);




app.listen(port, function() {
	console.log("Server is running on port:" + port);
});
