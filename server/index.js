const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const path = require("path")
const mongoose = require("mongoose")
const User = require("./models/User")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "../client")))

app.get("/api", async(req,res) => {
    const datas = await User.find()
    res.status(200).json(datas)
})

app.post("/api/adding", async(req, res) => {
    await User.create(req.body)
    res.status(200).json("success")
})

app.post("/api/deleting", async(req, res) => {
    await User.findByIdAndDelete(req.body._id)
    res.status(200).json("success")
})

mongoose.connect("mongodb://localhost:27017", {dbName:"sample"}).then(()=>{
    app.listen(8000, () => {
        console.log("Listening on port 8000")
    })
})

