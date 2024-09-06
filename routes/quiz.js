const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizCreate');

// Post (Create) API for Quiz creation
router.post('/quiz', async (req, res) => {
    try {
        const {
            quizName,
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
            totalTime,
            textQuestionAttempted,
            imageQuestionAttempted,
            textAndImageQuestionAttempted,
            textCorrectAns,
            textInCorrectAns,
            imgCorrectAns,
            imgInCorrectAns,
            textImgCorrectAns,
            textImgInCorrectAns,
            textField
        } = req.body;

        const quiz = new Quiz({
            quizName,
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
            totalTime,
            textQuestionAttempted,
            imageQuestionAttempted,
            textAndImageQuestionAttempted,
            textCorrectAns,
            textInCorrectAns,
            imgCorrectAns,
            imgInCorrectAns,
            textImgCorrectAns,
            textImgInCorrectAns,
            textField
        });

        const savedQuiz = await quiz.save();
        res.status(201).json({
            success: true,
            message: 'Quiz saved successfully!',
            quizId: savedQuiz._id  // Return the quiz ID
        });
    } catch (error) {
        console.error('Error saving quiz data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Get (Fetch) API for showing all created quizzes
router.get('/quiz', async (req, res) => {
    try {
        const quizData = await Quiz.find();
        res.status(200).json(quizData);
    } catch (error) {
        console.error('Error fetching quiz data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error. Failed to fetch quiz data.' });
    }
});

// Delete a quiz by ID
router.delete('/quiz/:id', async (req, res) => {
    const quizId = req.params.id;
    
    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(quizId);

        if (!deletedQuiz) {
            return res.status(404).json({ success: false, error: 'Invalid quiz ID. Unable to delete requested quiz.' });
        }

        res.status(200).json({ success: true, message: 'Quiz deleted successfully', deletedQuiz });
    } catch (error) {
        console.error('Error deleting quiz:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error. Failed to delete quiz.' });
    }
});

// Fetch quiz by ID
router.get('/quiz/:id', async (req, res) => {
    try {
        const quizId = req.params.id;
        const quizData = await Quiz.findById(quizId);

        if (!quizData) {
            return res.status(404).json({ success: false, error: 'Quiz not found' });
        }

        res.status(200).json(quizData);
    } catch (error) {
        console.error('Error fetching quiz data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Update additional data for analysis
router.post('/quiz/:id', async (req, res) => {
    try {
        const quizId = req.params.id;

        const {
            textQuestionAttempted,
            imageQuestionAttempted,
            textAndImageQuestionAttempted,
            textCorrectAns,
            textInCorrectAns,
            imgCorrectAns,
            imgInCorrectAns,
            textImgCorrectAns,
            textImgInCorrectAns
        } = req.body;

        const existingQuiz = await Quiz.findById(quizId);
        if (!existingQuiz) {
            return res.status(404).json({
                success: false,
                error: 'Quiz not found',
            });
        }

        existingQuiz.textQuestionAttempted = textQuestionAttempted;
        existingQuiz.imageQuestionAttempted = imageQuestionAttempted;
        existingQuiz.textAndImageQuestionAttempted = textAndImageQuestionAttempted;
        existingQuiz.textCorrectAns = textCorrectAns;
        existingQuiz.textInCorrectAns = textInCorrectAns;
        existingQuiz.imgCorrectAns = imgCorrectAns;
        existingQuiz.imgInCorrectAns = imgInCorrectAns;
        existingQuiz.textImgCorrectAns = textImgCorrectAns;
        existingQuiz.textImgInCorrectAns = textImgInCorrectAns;

        const updatedQuiz = await existingQuiz.save();

        res.status(200).json({
            success: true,
            message: 'Quiz updated successfully!',
            updatedQuizData: updatedQuiz,
        });
    } catch (error) {
        console.error('Error updating quiz data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;
