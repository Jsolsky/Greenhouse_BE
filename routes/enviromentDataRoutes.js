const express = require('express')
const router = express.Router()
const enviromentDataController = require('../controllers/enviromentDataController.js')

router.route("/boxData")
    .post(enviromentDataController.readEnviromentData) //Read

router.route("/")
    .post(enviromentDataController.createEnviromentData) //Create 

module.exports = router