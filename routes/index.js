/* 
File name: index.js
Student’s Name: Kanika Aggarwal
StudentID: 301273633
Date: 1 Oct, 2022
*/

const express = require('express');
const app = express.Router();

app.get("/", function(req, res) {
	res.render("index", {
		page: 1
	})
});

app.get("/about", function(req, res) {
	res.render("about", {
		page: 2
	});
});

app.get("/projects", function(req, res) {
	res.render("projects", {
		page: 3
	});
});

app.get("/services", function(req, res) {
	res.render("services", {
		page: 4
	});
});

app.get("/contact", function(req, res) {
	res.render("contact", {
		page: 5
	});
});

app.get("/login", function(req, res) {
	res.render("login", {
		page: 6
	});
});

app.get("/register", function(req, res) {
	res.render("register", {
		page: 6
	});
});



module.exports = app;