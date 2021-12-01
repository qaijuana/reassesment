const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Slots = require("../models/slots_model");

router.get("/seed", (req, res) => {
    Slots.create(
        {
            name: "",
            nric: "",
            last4: "",
            blocks: "",
            capacity: "",
        }
    )
})

// Create

router.post("/new", (req, res) => {
    res.send("create")
})

// Read All & Read One

router.get("/", (req, res) => {
    res.send("read all")
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

