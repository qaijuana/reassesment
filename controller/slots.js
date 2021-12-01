const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Slots = require("../models/slots_model");

router.get("/seed", (req, res) => {
    Slots.create(
        {
            name: "Something",
            nric: "S0284029Y",
            last4: "029Y",
            blocks: "9",
            date_asigned: "02/12/21"
        },
        {
            name: "something 2",
            nric: "S9247192W",
            last4: "192W",
            blocks: "12",
            date_asigned: "02/12/21"
        },
        {
            name: "another",
            nric: "S3810472L",
            last4: "029Y",
            blocks: "10",
            date_asigned: "02/12/21"
        },
        {
            name: "something 2",
            nric: "S8301850N",
            last4: "192W",
            blocks: "13",
            date_asigned: "03/12/21"
        },
        {
            name: "Something",
            nric: "S9343192I",
            last4: "029Y",
            blocks: "16",
            date_asigned: "04/12/21"
        },
    )
    res.send("ok");
})

// Create

router.post("/new", (req, res) => {
    const name = req.body.name
    const nric = req.body.nric
    const last4 = nric.slice(5);
    const jab = e.target.dose.value;
    res.send("create")
})

// Read All & Read One

router.get("/", (req, res) => {
    const getAll = Slots.find({});
    res.json(getAll);
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`read ${id}`);
})

// Update 

router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Update ${id}`);
})

// Delete

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Delete ${id}`);
})


module.exports = router
