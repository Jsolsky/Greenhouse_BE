require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
const path = require('path');
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser') // cross origin resource
const cors = require('cors') // cross origin resource
const corsOptions = require('./config/corsOptions') // cross origin resource

const connectDB = require("./config/dbCon")
const mongoose = require("mongoose")
const { logEvents } = require('./middleware/logger')

const enviromentTimeDataModel = require("./models/enviromentTimeData");
const userModel = require("./models/users");
const boxesModel = require("./models/boxes");


console.log("Env: ", process.env.NODE_ENV)

// MIDDLEWARE: any function that is in the middle of an HTTP request and an API response!
app.use(logger)

app.use(cors(corsOptions))

app.use(express.json()) // this lets the server recieve and send json

app.use(cookieParser()) //policy error if cookies are used incorrectly

app.use('/', express.static(path.join(__dirname, 'public'))); //this tells the server where to grab static files (e.g. css)

app.use('/', require('./routes/root'))
app.use('/users', require('./routes/userRoutes'))
app.use('/boxes', require('./routes/boxRoutes'))
app.use('/enviromentData', require('./routes/enviromentDataRoutes'))


app.all('*', (req, res) => { //'*' represents a catch all that does not get routed
    res.status(404);
    if (req.accepts('html')) { // the the request accepts an http header field (e.g. a GET request)
        res.sendFile(path.join(__dirname, "views", "404.html"))
    }
    else if (req.accepts('json')) { // the the request accepts an json
        res.json({ message : "404 Not Found"})
    }
    else {
        res.type('txt').send('404 Not Found')
    }
}) 

app.use(errorHandler) // 

try {
    connectDB()
    app.listen(port, () => console.log(`Server running on port ${port}`));
} catch (err) {
    console.log(err)
}

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

console.log("DB connection sucessful")



