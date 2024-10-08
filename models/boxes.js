const mongoose = require("mongoose");

const boxesSchema = new mongoose.Schema({
    "boxId": {
        type: String,
        required: true,
    },
    "userId" : {
        type: String,
        required: true,
    },
}, {collection : "boxes", versionKey : false});

const boxesModel = mongoose.model("boxes", boxesSchema);
module.exports = boxesModel;