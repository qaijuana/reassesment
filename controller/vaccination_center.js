const express = require("express");
const router = express.Router();
const Center = require("../models/center_model")

//! SEEDS FOR CENTERS
router.get("/seed", (req, res) => {
    Center.create({
        name: "Woodlands Polyclinic",
        vaccination_type: "Pfizer",
        postalCode: "730002"
    },
        {
            name: "Bedok Polyclinic",
            vaccination_type: "Pfizer",
            postalCode: "800112"
        },
        {
            name: "Yishun Hospital",
            vaccination_type: "Mordena",
            postalCode: "760001"
        },
        {
            name: "Orchard Polyclinic",
            vaccination_type: "Mordena",
            postalCode: "100100"
        })
    res.send("ok")
})


module.exports = router;