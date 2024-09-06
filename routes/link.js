const express = require('express');
const router = express.Router();
const Link = require('../models/linkTracker');

// Add this route to track impressions
router.get('/:id', async (req, res) => {
<<<<<<< HEAD
    const linkId = req.params.id;

    try {
        // Use the Link model to find the link by ID in the database
        const trackedLink = await Link.findById(linkId);

        if (!trackedLink) {
            // If link with the given ID is not found, send an error response
            return res.status(404).json({ success: false, error: 'Link not found' });
        }

        // Increment the impressions count
        trackedLink.impressions = (trackedLink.impressions || 0) + 1;
        await trackedLink.save();

        // Redirect to the original URL
        res.redirect(trackedLink.originalUrl);
    } catch (error) {
        console.error('Error tracking link:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;
=======
  const linkId = req.params.id;

  try {
    // Use the Link model to find the link by ID in the database
    const trackedLink = await Link.findById(linkId);

    if (!trackedLink) {
      // If link with the given ID is not found, send an error response
      return res.status(404).json({ success: false, error: 'Link not found' });
    }

    // Increment the impressions count
    trackedLink.impressions = (trackedLink.impressions || 0) + 1;
    await trackedLink.save();

    // Redirect to the original URL
    res.redirect(trackedLink.originalUrl);
  } catch (error) {
    console.error('Error tracking link:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
>>>>>>> e96ba7f9dd59f57e7a66f54314865ddb83e9bea6
