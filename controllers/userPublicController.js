const Users = require("../models/users")
// const Boxes = require("../models/boxes")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt') //password hasher

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    // Confirm data
    if (!username || !password ) {
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

module.exports = {
    createNewUser
}