const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
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
        type: string,
        requred: true
    },
    date_assigned: {
        type: Date,
    },
    jab_1: {
        type: Boolean,
        default: false
    },
    jab_2: {
        type: Boolean,
        default: false
    },
})

const User = mongoose.model("vaccination_center", userSchema);

module.exports = User;