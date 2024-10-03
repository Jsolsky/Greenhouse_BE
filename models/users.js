const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    "username": {
        type: String,
        required: true,
    },
    "password": {
        type: String,
        required: true,
    },
    "name": {
        type: String,
        // required: true,
    },
    "userId" : {
        type: Number,
        // required: true,
    },
}, {collection : "users", versionKey : false});

const userModel = mongoose.model("users", usersSchema);
module.exports = userModel;