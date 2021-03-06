const Express = require('express')
const path = require('path')
const url = require('url');


const port = process.argv[2]
const static_file_path = process.argv[3]

var app = Express()
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }))

app.get('/search', function(req, res) {
    if (req.query) {
        res.end(JSON.stringify(req.query))
    }

})

function handle(id) {
    return require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')

}
app.listen(port)