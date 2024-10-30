const enviromentData = require("../models/enviromentTimeData")
// const Boxes = require("../models/boxes")
const asyncHandler = require('express-async-handler')

// @desc create new enviroment data
// @route post /enviromentData
// @access Public?
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

// @desc read data for a specific box
// @route get /enviromentData/boxData
// @access Private
const readEnviromentData = asyncHandler (async (req, res) => {
    const boxId = req.query.boxId;

    const data = await enviromentData.find({"boxId":boxId}).sort({"time":-1})
    
    if (data) { 
        res.status(201).json(data) 
    } else {
        console.log("Failed")
        res.status(400).json({ message: 'Invalid request' })
    }
})

module.exports = {
    readEnviromentData,
    createEnviromentData
}