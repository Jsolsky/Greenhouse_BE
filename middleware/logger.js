const { format } = require('date-fns')
const { v4:uuid } = require('uuid')
const fs  = require('fs') //file service
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs')) // checks that the logs directory exists
        } 
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem) //this adds the logItem (message) to the logs folder
    } catch (err) {
        console.log(err)
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}

module.exports = {logEvents, logger}