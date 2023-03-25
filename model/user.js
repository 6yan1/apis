const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {type: String, default: null},
    first_name: {type: String, default: null },
    middle_name: {type: String, default: null },
    last_name: {type: String, default: null },
    email: {type: String, unique: true },
    balance: {type: Number, default: 0 },
    vip_lvl: {type: Number, default: 0 },
    phone: {type: String, unique: true },
    s: {type: String, default: "non-active" },
    m: {type: String, default: "non-active" },
    ban: {type: Boolean, default: false },
    order_id: {type: String, default: null },
    password: {type: String },
    token: { type: String }
});


module.exports = mongoose.model("user", userSchema);