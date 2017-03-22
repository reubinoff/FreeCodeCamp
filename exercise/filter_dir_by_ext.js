const fs = require('fs')
const path = require('path')





function get_filtered_list(dir_path, filter_ext, cb) {
    fs.readdir(dir_path, 'utf8', (err, data) => {
        if (err) {
            return cb(err, null)
        }
        d = data.filter((value) => {
            ext = path.extname(value)
            if (ext == "")
                return false
            return ext.indexOf(filter_ext) >= 0;
        })
        return cb(null, d)
    })
}

module.exports = get_filtered_list