const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cita = new Schema({
    name: String,
    date: String,
    time: String, 
    inCharge: String,
    clientAddress: String,
    cost: String,
    sessionPerDay: String
});

module.exports = mongoose.model('Cita', Cita);