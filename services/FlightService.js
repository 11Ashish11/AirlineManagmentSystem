// services/FlightService.js
const Flight = require('../models/Flight');

class FlightService {
    // Method to find flights based on user input
    async findFlights(departureCity, destinationCity, date) {
        try {
            // Convert the date to a range to find flights on the specified day
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);

            // Query the database for flights matching the criteria
            const flights = await Flight.find({
                departureCity,
                destinationCity,
                departureTime: { $gte: startOfDay, $lte: endOfDay },
            });

            return flights;
        } catch (error) {
            throw new Error('Error finding flights: ' + error.message);
        }
    }
}

module.exports = new FlightService();
