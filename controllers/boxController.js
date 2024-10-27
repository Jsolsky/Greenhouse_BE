const Boxes = require("../models/boxes")
// const Boxes = require("../models/boxes")
const asyncHandler = require('express-async-handler')

// @desc Get all boxes
// @route GET /boxes
// @access Private
const getAllBoxes = asyncHandler (async (req, res) => {
    const boxes = await Boxes.find()
    if (!boxes) {
       return res.status(400).json({message:"no boxes found"})
    }
    res.json(boxes)
})

// @desc Get all boxes for a single user
// @route GET /boxes/user
// @access Private
const getUserBoxes = asyncHandler (async (req, res) => {
    const username = req.query.username;
    
    const boxes = await Boxes.find({"username":username})
    if (!boxes) {
       return res.status(400).json({message:"no boxes found"})
    }
    res.json(boxes)
})

// @desc create new boxes
// @route post /boxes
// @access Private
const createNewBox = asyncHandler (async (req, res) => {

})

// @desc update boxes
// @route PATCH /boxes
// @access Private
const updateBox = asyncHandler (async (req, res) => {

})

// @desc delete boxes
// @route DELETE /boxes
// @access Private
const deleteBox = asyncHandler (async (req, res) => {

})

module.exports = {
    getAllBoxes,
    getUserBoxes,
    createNewBox,
    updateBox,
    deleteBox
}