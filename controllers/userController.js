const Users = require("../models/users")
// const Boxes = require("../models/boxes")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt') //password hasher

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler (async (req, res) => {
 const users = await Users.find().lean()
 if (!users) {
    return res.status(400).json({message:"no users found"})
 }
 return res.status(200).json(users)
})

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    // Confirm data
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username
    const duplicate = await Users.findOne({ username }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Hash password 
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = { username, "password": hashedPwd }

    // Create and store new user 
    const user = await Users.create(userObject)

    if (user) { //created 
        res.status(201).json({ message: `New user ${username} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
})

// @desc update users
// @route PATCH /users
// @access Private
const updateUser = asyncHandler (async (req, res) => {

})

// @desc delete users
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler (async (req, res) => {

})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}