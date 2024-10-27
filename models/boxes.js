const mongoose = require("mongoose");

const boxesSchema = new mongoose.Schema({
    "boxId": {
        type: String,
        required: true,
    },
    "username" : {
        type: String,
        required: true,
    },
    "boxName": {
        type: String
    },
    "boxCategory": {
        type: String,
        enum: ["Herb", "Flower", "Fruit", "Succulent", "Vegetable", "Other"],
        defualt: "Other"
    }
}, {collection : "boxes", versionKey : false});

const boxesModel = mongoose.model("boxes", boxesSchema);
module.exports = boxesModel;