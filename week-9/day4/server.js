
var http = require('http');
var fs = require('fs');

var server = http.createServer(function handleRequests(request, response) {

    console.log('new request to ' + request.url);

    if (request.url === '/') {

        fs.readFile('home.html', function(err, data) {
            // err is a POSSIBLE error object (or null)
            // data is a BUFFER object, not yet a string
            if (err) {
                response.end('<html><body><h1>ERROR!</h1><p>' + err.message + '</p></body></html>');
            } else {
                response.end(data.toString());
            }
        });

    } else {
        response.end('<html><body><h1>404</h1></body></html>');
    }

});

server.listen(3000, function() {
    console.log('my server is now up and running!');
});
