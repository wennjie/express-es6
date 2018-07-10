#! node
var fs = require('fs');
var path = require('path');
function copyTemplate (to) {
  from = path.join(__dirname, 'templates');
  write(to, fs.readFileSync(from, 'utf-8'))
}
function write (path, str, mode) {
  fs.writeFileSync(path, str)
}
function mkdir (path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
}