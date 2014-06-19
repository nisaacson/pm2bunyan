var parse = require('../lib/parse')
var expect = require('chai').expect

describe('Parse pm2 logs', function() {

  it('should parse single line', function() {
    var input = '\033[34m[dummy-0 (out) 2014-06-19T15:27:53]\033[39m {"name":"dummy logger","hostname":"Noahs-MacBook-Pro.local","pid":23667,"level":30,"count":5953,"msg":"sample log here","time":"2014-06-19T21:26:53.903Z","v":0}'
    var output = parse(input)
    expect(output).to.exist
    expect(output).to.be.a('string')
    var row = JSON.parse(output)
    expect(row).to.exist
    expect(row.name).to.equal('dummy logger')
  })
})
