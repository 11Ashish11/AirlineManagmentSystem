// controllers/FlightController.js
const FlightService = require('../services/FlightService');

class FlightController {
    async getAvailableFlights(req, res) {
        try {
            const { departureCity, destinationCity, date } = req.query;

            // Validate input
            if (!departureCity || !destinationCity || !date) {
                return res.status(400).json({ message: 'Please provide departure city, destination city, and date.' });
            }

            // Get flights from the FlightService
            const flights = await FlightService.findFlights(departureCity, destinationCity, date);
            res.json(flights);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching flights: ' + error.message });
        }
    }
}

module.exports = new FlightController();
