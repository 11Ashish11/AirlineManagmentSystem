// models/Flight.js
const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: String,
    departureCity: String,
    destinationCity: String,
    departureTime: Date,
    arrivalTime: Date,
    flightDuration: Number,
    cost: Number,
    aeroplaneId: String,
});

module.exports = mongoose.model('Flight', flightSchema);

