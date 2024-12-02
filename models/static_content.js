const mongoose = require('mongoose');

const StaticContentSchema = new mongoose.Schema({
    title: { type: String, required: true }, // e.g., "Privacy Policy", "General Health Tips"
    content: { type: String, required: true }
});

module.exports = mongoose.model('StaticContent', StaticContentSchema);
