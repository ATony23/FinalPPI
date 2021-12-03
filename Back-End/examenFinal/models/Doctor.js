const mongoose = require('mongoose');
const { Schema } = mongoose;

const Doctor = new Schema({
    name: String,
    service: String,
    phone: String,
});

module.exports = mongoose.model('Doctor', Doctor);