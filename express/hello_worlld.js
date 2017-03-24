const Express = require('express')




const port = process.argv[2]

var app = Express()
app.get('/home', function(req, res) {
    res.end('Hello World!')
})
app.listen(port)