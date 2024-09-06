const express = require('express');
const router = express.Router();
const Poll = require('../models/pollCreate');

// Route to create a poll
router.post('/poll', async (req, res) => {
    try {
        const {
            pollName,
            typeText,
            questionText,
            optionsText,
            correctOptionText,
            typeImg,
            questionImg,
            optionsImg,
            correctOptionImg,
            typeTxtImg,
            questionTxtImg,
            optionsTxtImg,
            optionsImageTxtImg,
            correctOptionTxtImg,
            currentDateAndTime,
        } = req.body;

        // Create a new Poll instance
        const poll = new Poll({
            pollName,
            typeText,
            questionText,
            optionsText,
            correctOptionText,
            typeImg,
            questionImg,
            optionsImg,
            correctOptionImg,
            typeTxtImg,
            questionTxtImg,
            optionsTxtImg,
            optionsImageTxtImg,
            correctOptionTxtImg,
            currentDateAndTime,
        });

        // Save the poll to the database
        const savedPoll = await poll.save();
        console.log("Backend Data to save", savedPoll);

        res.status(201).json({
            success: true,
            message: 'Poll saved successfully!',
            newPOLLDATA: savedPoll,
        });
    } catch (error) {
        console.error('Error saving poll data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Route to fetch a poll by ID
router.get('/poll/:id', async (req, res) => {
    try {
        const pollId = req.params.id;

        // Find the poll by ID
        const pollData = await Poll.findById(pollId);

        if (!pollData) {
            return res.status(404).json({ success: false, error: 'Poll not found' });
        }

        res.status(200).json(pollData);
    } catch (error) {
        console.error('Error fetching poll data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;