const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name:String,
    image:String,
    price:Number
})

module.exports = mongoose.model("Product",productSchema);