const Express = require('express')
const path = require('path')



const port = process.argv[2]
const static_file_path = process.argv[3]

var app = Express()
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))

app.post('/form', function(req, res) {
    res.end(req.body.str.split('').reverse().join(''))

})

app.listen(port)