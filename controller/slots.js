const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Slots = require("../models/slots_model");
const { create } = require("../models/slots_model");

router.get("/seed", async (req, res) => {
    const createSeeds = await Slots.create(
        {
            name: "Something",
            nric: "S0284029Y",
            last4: "029Y",
            blocks: "9",
            date_assigned: "02/12/2021"
        },
        {
            name: "something 2",
            nric: "S9247192W",
            last4: "192W",
            blocks: "12",
            date_assigned: "02/12/2021"
        },
        {
            name: "another",
            nric: "S3810472L",
            last4: "472L",
            blocks: "10",
            date_assigned: "02/12/2021"
        },
        {
            name: "something 2",
            nric: "S8301850N",
            last4: "850N",
            blocks: "13",
            date_assigned: "03/12/2021"
        },
        {
            name: "Something",
            nric: "S9343192I",
            last4: "192I",
            blocks: "16",
            date_assigned: "04/12/2021"
        },
    )

    res.json(createSeeds);
})

// Create

router.post("/new", async (req, res) => {
    const name = req.body.name;
    const nric = req.body.nric;
    const last4 = nric.slice(5);
    const blocks = req.body.blocks;
    console.log(req.body);

    // const hashedNric = nric.bcrypt
    const createBooking = await Slots.create({
        name: name,
        nric: nric,
        last4: last4,
        blocks: blocks
    })
    res.json(createBooking);
})

// Read All & Read One

router.get("/", async (req, res) => {
    const getAll = await Slots.find({});
    res.json(getAll);
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const getOne = await Slots.findById(id)
    res.json(getOne);
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
