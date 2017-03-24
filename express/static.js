const Express = require('express')




const port = process.argv[2]
const static_file_path = process.argv[3]

var app = Express()
app.use(Express.static(process.argv[3] || path.join(__dirname, 'public')));


app.listen(port)