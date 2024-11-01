// models/Aeroplane.js
const mongoose = require('mongoose');

const aeroplaneSchema = new mongoose.Schema({
    ID: { type: String, required: true },
    Airline: { type: String, required: true },
    'Flight IDs': [String],
    'Cost Per Seat': { type: Number, required: true },
});

const Aeroplane = mongoose.model('aeroplane', aeroplaneSchema);

module.exports = Aeroplane;