const express = require('express')
const router = express.Router()
const path  = require('path')

router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html')) // .. = out of the routes folder
}) // '/' OR '/index' OR '/index.html'

module.exports = router
