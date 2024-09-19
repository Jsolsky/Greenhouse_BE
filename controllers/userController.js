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

// @desc create new users
// @route post /users
// @access Private
const createNewUer = asyncHandler (async (req, res) => {

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
    createNewUer,
    updateUser,
    deleteUser
}