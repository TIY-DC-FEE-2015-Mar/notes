
// When "require()" is used, if there is a dot "." to start, it looks in your file system
// if not, it first looks in node_modules, then in the Core of Node itself

var express = require('express');

var app = express();

var routes = require('./routes');
routes(app);

app.listen(3000, function() {
    console.log('my express app is up and running!');
});
