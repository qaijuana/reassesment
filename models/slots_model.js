const mongoose = require("mongoose");
const VaccinationCenter = require("./center_model");
const Schema = mongoose.Schema;

const slotsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    nric: {
        type: String,
        required: true
    },
    last4: {
        type: String,
        required: true
    },
    blocks: {
        type: String,
        required: true
    },
    // capacity: {
    //     type: Number,
    //     default: 3
    // },

})

const Slots = mongoose.model("slots", slotsSchema);

module.exports = VaccinationCenter;