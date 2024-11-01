// routes/flightRoutes.js
const express = require('express');
const FlightController = require('../controllers/FlightController');
const router = express.Router();

// Route to get available flights
router.get('/flights', FlightController.getAvailableFlights);
module.exports = router;
