const Express = require('express')
const path = require('path')



const port = process.argv[2]
const static_file_path = process.argv[3]

var app = Express()
app.set('views', process.argv[3])
app.set('view engine', 'jade')
app.use(function(req, res) {
    res.render('index', { date: new Date().toDateString() })
})

app.listen(port)