require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const smsRoutes = require('./server/routes/sms');
const voiceRoutes = require('./server/routes/voice');
const airtimeRoutes = require('./server/routes/airtime');

app.get('/api/disaster-locations', (req, res) => {
    // Example data for disaster locations
    const disasterLocations = [
      { latitude: -1.286389, longitude: 36.817223, description: 'Flood Zone' },
      { latitude: -1.2921, longitude: 36.8219, description: 'Earthquake Zone' },
    ];
    res.json(disasterLocations);
  });


app.use('/api', smsRoutes);
app.use('/api', voiceRoutes);
app.use('/api', airtimeRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
