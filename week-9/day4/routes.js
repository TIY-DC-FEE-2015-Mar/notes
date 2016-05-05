
var items = require('./items.js')();

module.exports = function(app) {

    app.get('/', function(request, response) {
        console.log(request.query);

        response.end('<html><h1>Hello Express</h1></html>');
    });

    app.get('/items', function(request, response) {
        console.log(request.query);

        var html = items.getAll();

        response.end(html);
    });
};
