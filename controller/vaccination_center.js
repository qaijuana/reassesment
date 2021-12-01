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
            vaccination_type: "Moderna",
            postalCode: "760001"
        },
        {
            name: "Orchard Polyclinic",
            vaccination_type: "Moderna",
            postalCode: "100100"
        })
    res.send("ok")
})

router.post("/new", (req, res) => {
    const newCenter = Center.create(req.body);
    res.json(newCenter);
})


// Read All and Read One

router.get("/", async (req, res) => {
    const findCenters = await Center.find({});
    res.json(findCenters);
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const findCenter = await Center.findById(id)
    res.json(findCenter);
})


module.exports = router;