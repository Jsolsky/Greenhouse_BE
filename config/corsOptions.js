const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) { // if the origin is in the list, or if no origin exists
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    }, 
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions