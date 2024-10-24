const express = require('express')
const router = express.Router()
const userProtectedController = require('../controllers/userProtectedController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route("/")
    .get(userProtectedController.getAllUsers) //Read
    .patch(userProtectedController.updateUser) //Update
    .delete(userProtectedController.deleteUser) //Delete

module.exports = router