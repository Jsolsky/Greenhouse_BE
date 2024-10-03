const enviromentData = require("../models/enviromentTimeData")
// const Boxes = require("../models/boxes")
const asyncHandler = require('express-async-handler')

// @desc create new boxes
// @route post /boxes
// @access Private
const createEnviromentData = asyncHandler (async (req, res) => {
    docInsert = { 
        "boxId" : req.body["boxId"], 
        "time" : req.body["time"],
        "temperature" : req.body["temperature"]
    }
    
    const data = await enviromentData.create(docInsert)
    
    if (data) { //created 
        res.status(201).json({ message: 'Enviroment Data Created' })
    } else {
        console.log("Failed")
        res.status(400).json({ message: 'Invalid user data received' })
    }
})
   
module.exports = {
    createEnviromentData
}