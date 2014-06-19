var pattern = /^.*?\[.*?\].*? {"/

module.exports = function parse(input) {
  var output = input.replace(pattern, '{"')
  return output
}
