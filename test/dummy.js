var bunyan = require('bunyan')
var logger = bunyan.createLogger({ name: 'dummy logger' })
var count = 0
setInterval(writeLog, 10)

function writeLog() {
  count += 1
  logger.info({ count: count}, 'sample log here')
}


