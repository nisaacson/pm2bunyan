var Liner = require('linerstream')
var Parser = require('./lib/transform')

module.exports = function(readStream) {
  var liner = new Liner()
  var parser = new Parser()
  readStream.pipe(liner).pipe(parser).pipe(process.stdout)
}
