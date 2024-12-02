const mongoose = require('mongoose');

const HealthTipSchema = new mongoose.Schema({
    ageGroup: { type: String, required: true }, // e.g., "child", "adult", "senior"
    tip: { type: String, required: true }
});

module.exports = mongoose.model('HealthTip', HealthTipSchema);
