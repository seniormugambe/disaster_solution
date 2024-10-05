const express = require('express');
const router = express.Router();
const africastalking = require('../africastalking');
const voice = africastalking.VOICE;

router.post('/make-call', async (req, res) => {
    const { phone } = req.body;

    try {
        const response = await voice.call({ to: phone, from: process.env.AT_CALLER_ID });
        res.status(200).json({ message: 'Call initiated successfully', data: response });
    } catch (error) {
        console.error('Error making call:', error);
        res.status(500).json({ message: 'Failed to make call', error });
    }
});

module.exports = router;
