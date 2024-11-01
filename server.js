// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const Aeroplane = require('./models/Aeroplane.js'); // Import the Aeroplane model


// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/AirlineManagementSystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Sample route to get all aeroplanes
app.get('/aeroplanes', async (req, res) => {
    try {
        const aeroplanes = await Aeroplane.find();
        console.log("The list of aeroplanes is: ", aeroplanes);
        res.json(aeroplanes);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching aeroplanes' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
