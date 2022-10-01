const express = require("express"),
	app = express(), routes = require('./routes');

const port = process.env.PORT || 8080

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use('/', routes);




app.listen(port, function() {
	console.log("Server is running on port:" + port);
});
