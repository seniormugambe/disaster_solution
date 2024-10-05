const express = require('express');
const router = express.Router();
const africastalking = require('../africastalking');
const airtime = africastalking.AIRTIME;

router.post('/share-airtime', async (req, res) => {
    const { phone, amount } = req.body;
    const recipients = [{
        phoneNumber: phone,
        currencyCode: 'UGX', // Adjust based on your region
        amount
    }];

    try {
        const response = await airtime.send({ recipients });
        res.status(200).json({ message: 'Airtime shared successfully', data: response });
    } catch (error) {
        console.error('Error sharing airtime:', error);
        res.status(500).json({ message: 'Failed to share airtime', error });
    }
});

module.exports = router;
