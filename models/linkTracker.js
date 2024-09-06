const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    originalUrl: String,
    impressions: { type: Number, default: 0 }
});

module.exports = mongoose.model('Link', linkSchema);
