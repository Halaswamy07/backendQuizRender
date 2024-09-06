// routes/dashboard.js
const express = require('express');
const router = express.Router();
const verifyTokenMiddleware = require('../middlewares/authMiddleware');
const Poll = require('../models/pollCreate'); // Updated to pollCreate

router.get('/dashboard', verifyTokenMiddleware, async (req, res) => {
    try {
        // Fetch data needed for the dashboard
        const polls = await Poll.find(); // Adjust query as needed
        res.status(200).json({ success: true, data: polls });
    } catch (error) {
        console.error("Error fetching dashboard data", error);
        res.status(500).json({ success: false, message: 'Error fetching dashboard data' });
    }
});

module.exports = router;
