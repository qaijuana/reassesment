require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const center_controller = require("./controller/vaccination_center")
const slot_controller = require("./controller/slots")

const port = 4000 || process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;
mongoose.connect(
    MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true
    },
    () => {
        console.log("mongo cloud connection established");
    }
);

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));




app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/center", center_controller)
app.use("/api/slot", slot_controller)


app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
    console.log(`We are live on ${port}.0 fm`)
})