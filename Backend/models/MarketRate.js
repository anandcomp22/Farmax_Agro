const mongoose = require('mongoose');

const marketRateSchema = new mongoose.Schema({
  cropName: String,
  price: Number,
  market: String,
  trend: {
    type: String,
    enum: ['up', 'down', 'stable'],
    default: 'stable'
  },
  date: Date
}, { timestamps: true });

module.exports = mongoose.model('MarketRate', marketRateSchema);
