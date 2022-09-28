const express = require("express"),
	app = express(), routes = require('./routes');



app.set("view engine", "ejs");

app.use(express.static('public'));
app.use('/', routes);




app.listen(8080, function() {
	console.log("Server is running on port 8080 ");
});
