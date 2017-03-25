var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.get('/', function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});