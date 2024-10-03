const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route("/")
    .post(userController.createNewUser) //Create 
    .get(userController.getAllUsers) //Read
    .patch(userController.updateUser) //Update
    .delete(userController.deleteUser) //Delete

module.exports = router