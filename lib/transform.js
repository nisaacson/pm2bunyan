var Transform = require('stream').Transform
var util = require('util')
var parse = require('./parse')

function Parser() {
  var opts = { objectMode: true }
  Transform.call(this, opts)
}

util.inherits(Parser, Transform)

Parser.prototype._transform = function transform(chunk, encoding, done) {
  var data = parse(chunk)
  data += '\n'
  this.push(data)
  done()
}

module.exports = Parser
