const mongoose = require("mongoose");

const activateEmailSchema = new mongoose.Schema({
    id: {type: String, default: null},
    code: {type: String, default: null}
})

module.exports = mongoose.model("emailAc", activateEmailSchema);