const mongoose = require('mongoose');
const { Schema } = mongoose;

const Services = new Schema({
    name: String,
    description: String,
    inCharge: String,
    cost: String, 
    address: String,
    rate: String
});

module.exports = mongoose.model('Servicio', Services);