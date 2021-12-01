const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slotsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    nric: {
        type: String,
        required: true,
        unique: true
    },
    last4: {
        type: String,
        required: true
    },
    date_assigned: {
        type: String
    },
    jab1: {
        type: Boolean,
        default: false
    },
    jab2: {
        type:Boolean,
        default: false
    },
    blocks: {
        type: String,
        required: true,
    },
    

})

const Slots = mongoose.model("slots", slotsSchema);

module.exports = Slots;