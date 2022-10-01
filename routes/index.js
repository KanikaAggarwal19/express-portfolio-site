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

module.exports = app;