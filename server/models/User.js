const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    nickname: String,
    aka: String
})

module.exports = mongoose.model("users", userSchema)