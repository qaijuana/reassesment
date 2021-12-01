const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vaccinationCenterSchema = Schema({
    name: {
        type: String,
        required: true
    },
    vaccination_type: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },

});

const VaccinationCenter = mongoose.model("vaccination_center", vaccinationCenterSchema);

module.exports = VaccinationCenter;

