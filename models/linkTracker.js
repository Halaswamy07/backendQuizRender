const mongoose = require('mongoose');

<<<<<<< HEAD
const linkSchema = new mongoose.Schema({
    originalUrl: String,
    impressions: { type: Number, default: 0 }
});

module.exports = mongoose.model('Link', linkSchema);
=======
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
>>>>>>> e96ba7f9dd59f57e7a66f54314865ddb83e9bea6
