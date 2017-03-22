const my_fs = require("./my_fs")
const net = require('net')
const bl = require("bl")
const strftime = require('strftime')
const fs = require("fs")
const Router = require("router")
const url = require('url');
if (process.argv.length < 1) {
    return
}
var map = require('through2-map')

// const file_path = process.argv[2]
// const filter = process.argv[3]
// console.log(file_path)

const port = process.argv[2]
var http = require('http')


var server = http.createServer(function(req, res) {
    console.log(req.method)
    if (req.method == "GET") {
        raw_url = url.parse(req.url, true)
        if (raw_url.pathname == "/api/parsetime") {
            if (url.parse(req.url, true).query.iso) {
                time_fmt = url.parse(req.url, true).query.iso
                var Xmas95 = new Date(time_fmt);
                reply = {
                    hour: Xmas95.getHours(),
                    minute: Xmas95.getMinutes(),
                    second: Xmas95.getSeconds()
                }
            }
        } else if (raw_url.pathname == "/api/unixtime") {
            unit_time = Date.parse(time_fmt)
            reply = { unixtime: unit_time }
        }
        if (reply) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify(reply))
            res.end()
        }
    }
    // handler = router.route(req)
    // handler.process(req, res)
})
server.listen(Number(port))


// return

// Object.keys(strs).forEach(function(url) {
//     http.get(url, (response) => {
//         str = ""
//         response.setEncoding('utf8')
//         response.on('data', (data) => {
//             str += data.toString()
//         })
//         response.on('end', () => {
//             ended(url, str)
//         })
//         response.on('error', console.error)

//     }).on('error', console.error)

// }, this);


// function ended(url, data) {
//     strs[url] = data;
//     isready = true
//     Object.keys(strs).forEach(function(element) {
//         if (strs[element] == "") {
//             isready = false
//             return
//         }
//     }, this);
//     if (isready == false) {
//         return
//     }

//     Object.keys(strs).forEach(function(el) {
//         console.log(strs[el])
//     }, this)

// }
// // my_fs(file_path, filter, callback)
// // console.log(data)
// // console.log(data.split("\n"))

// function callback(err, list) {
//     for (i = 0; i < list.length; i++)
//         console.log(list[i])
// }