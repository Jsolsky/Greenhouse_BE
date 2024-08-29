const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route("/")
    .get(userController.getAllUsers) //Createe
    .post(userController.createNewUer) //Read 
    .patch(userController.updateUser) //Update
    .delete(userController.deleteUser) //Delete

module.exports = router