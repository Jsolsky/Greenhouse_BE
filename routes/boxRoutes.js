const express = require('express')
const router = express.Router()
const boxController = require('../controllers/boxController')

router.route("/")
    .get(boxController.getAllBoxes) //Create
    .post(boxController.createNewBox) //Read 
    .patch(boxController.updateBox) //Update
    .delete(boxController.deleteBox) //Delete

module.exports = router