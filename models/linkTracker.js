const mongoose = require('mongoose');

// Define the schema for the LinkTracker
const linkTrackerSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },

  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quizs',
    required: true
  },
  impressions: {
    type: Number,
    default: 0
  },
  // Add any other fields needed for tracking
});

module.exports = mongoose.model("LinkTracker", linkTrackerSchema);
