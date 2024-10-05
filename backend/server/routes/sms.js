const express = require('express');
const router = express.Router();
const africastalking = require('../africastalking');
const sms = africastalking.SMS;

router.post('/send-sos', async (req, res) => {
    const { phone, locationLink, websiteLink } = req.body;
    const message = `SOS Alert! Location: ${locationLink}. More info: ${websiteLink}`;

    try {
        const response = await sms.send({ to: phone, message });
        res.status(200).json({ message: 'SOS sent successfully', data: response });
    } catch (error) {
        console.error('Error sending SOS:', error);
        res.status(500).json({ message: 'Failed to send SOS', error });
    }
});

module.exports = router;
